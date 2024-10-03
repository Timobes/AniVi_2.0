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
            
            return {"message": "Пароли не совпадают!"}

        } else if (username.length < 5 || pass.length < 5) {
            
            return {"message": "Маленькая длина логина или пароля!"}
            
        } else {
            const jwtpass = createJWTPassword(pass)
            
            const accessToken = createToken(username, '30m')
            const refreshToken = createToken(username, '30d')

            // const createUser = await db.query('INSERT INTO users(login, pass, ref_token) VALUES($1, $2, $3) RETURNING *', [login, jwtpass, refreshToken])
            const createUser = await User.create({
                username: username,
                pass: jwtpass,
                ref_token: refreshToken
            })

            createAvatarFolder(username)

            const rows = createUser

            return {"message": "Пользователь создан!", "accessToken": `${accessToken}`, rows}
        }
    }

    async auth(body, res) {
        const {username, pass} = body

        // const nickname = await db.query('SELECT * FROM users WHERE login = $1', [login])
        const nickname = await User.findOne({where: {username: username}})
        const isPass = nickname.dataValues.pass
        const readPass = readJWTPassword(isPass)

        if(pass == readPass.pass) {
            const accessToken = createToken(username, '30m')
            const refreshToken = createToken(username, '30d')
            
            // await db.query('UPDATE users SET ref_token = $1', [refreshToken])
            await User.update({ref_token: refreshToken},{where: {pass: isPass}})

            res.cookie('accessToken', accessToken, {
                httpOnly: true
            })
            
            return {"message": `Добро пожаловать ${username}!`}
        
        } else {

            return {"message": "Неправильный пароль!"}

        }
    }

    async test(req) {
        return {"message": "test"}
    }

    async admin(req) {
        return {"message": "Добро пожаловать Админ!"}
    }

    async profile(req, res) {
        const whatIsUser = req.cookies.accessToken
        const nickname = readToken(whatIsUser)
        
        // const userProfile = await db.query('SELECT * FROM users WHERE login = $1', [nickname.jwtPass.nickname])
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