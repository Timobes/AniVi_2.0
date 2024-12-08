const User = require('../db/models/userModel.js')
const { createAvatarFolder } = require('../utility/createAvatarFolder.js')
const { createJWTPassword } = require('../utility/createJWTPassword.js')
const {createToken} = require('../utility/createToken.js')
const { readJWTPassword } = require('../utility/readJWTPassword.js')
const { readToken } = require('../utility/readToken.js')

class AuthService {
    async login(body) {
        const {username, pass, repeatPass} = body

        if (pass != repeatPass) {
            
            return {status: 400, message: "Пароли не совпадают!"}

        } else if (username.length < 5 || pass.length < 5) {
            
            return {status: 400, message: "Маленькая длина логина или пароля!"} 
            
        } else {
            const jwtpass = createJWTPassword(pass)
            
            const accessToken = createToken(username, '30m')
            const refreshToken = createToken(username, '30d')

            const createUser = await User.create({
                username: username,
                pass: jwtpass,
                ref_token: refreshToken
            })

            createAvatarFolder(username)

            const rows = createUser

            return {status: 201, message: "Пользователь создан!", accessToken: `${accessToken}`, rows}
        }
    }

    async auth(body, res) {
        const {username, pass} = body

        const nickname = await User.findOne({where: {username: username}})
        const isPass = nickname.dataValues.pass
        const readPass = readJWTPassword(isPass)

        if(pass == readPass.pass) {
            const accessToken = createToken(username, '30m')
            const refreshToken = createToken(username, '30d')
            
            await User.update({ref_token: refreshToken},{where: {pass: isPass}})

            res.cookie('accessToken', accessToken, {
                httpOnly: true
            })
            
            return {"message": `Добро пожаловать ${username}!`}
        
        } else {

            return {"message": "Неправильный пароль!"}

        }
    }

    async admin(req) {
        return {"message": "Добро пожаловать Админ!"}
    }

    async profile(req, res) {
        const whatIsUser = req.cookies.accessToken
        const nickname = readToken(whatIsUser)
        
        const userProfile = await User.findOne({where: {username: nickname.jwtPass.username}})
        
        const rows = userProfile.dataValues

        return rows
    }

    async exit(res) {
        res.clearCookie('accessToken')
        return {"mesage": "Вы вышли из аккаунта!"}
    }
}

module.exports = new AuthService 