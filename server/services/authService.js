const User = require('../db/models/userModel.js')
const { createAvatarFolder } = require('../utility/createAvatarFolder.js')
const { createPassword } = require('../utility/createPassword.js')
const {createToken} = require('../utility/createToken.js')
const { readPassword } = require('../utility/readPassword.js')
const { readToken } = require('../utility/readToken.js')

class AuthService {
    async login(body) {
        const {username, pass, repeatPass} = body

            // const isUser = await User.findOne({where:{ username: username}}) 
            // console.log(isUser.dataValues.username)
            
            // if (isUser.dataValues.username) {
            //     return {status: 401, message: "Такой пользователь уже есть!"}
            // } else {

                const jwtpass = await createPassword(pass)
                
                const accessToken = createToken(username, '30m')
                const refreshToken = createToken(username, '30d')

                const createUser = await User.create({
                    username: username,
                    pass: jwtpass,
                    ref_token: refreshToken
                })

                createAvatarFolder(username)

                const rows = createUser

                return {message: "Пользователь создан!"}
            // }
        
    }

    async auth(body, res) {
        const {username, pass} = body

        const nickname = await User.findOne({where: {username: username}})
        const isPass = nickname.dataValues.pass

        const testPass = await readPassword(pass, isPass) 
        
        if(testPass) {
            const accessToken = createToken(username, '30m')
            const refreshToken = createToken(username, '30d')
            
            await User.update({ref_token: refreshToken},{where: {pass: isPass}})

            res.cookie('accessToken', accessToken, {
                httpOnly: true
            })
            
            return {message: `Добро пожаловать ${username}!`}

        
        } else {

            return {message: "Неправильный пароль!"}

        }
    }

    async admin(req) {
        return {message: "Добро пожаловать Админ!"}
        
    }

    async profile(req, res) {
        const whatIsUser = req.cookies.accessToken
        const nickname = readToken(whatIsUser)
        
        const userProfile = await User.findOne({where: {username: nickname.jwtPass.username}})
        
        const rows = userProfile.dataValues

        return {rows}
    }

    async exit(res) {
        res.clearCookie('accessToken')
        return {message: "Вы вышли из аккаунта!"}
    }
}

module.exports = new AuthService 