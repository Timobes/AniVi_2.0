const db = require('../db/db.js')
const { createJWTPassword } = require('../utility/createJWTPassword.js')
const {createToken} = require('../utility/createToken.js')
const { readJWTPassword } = require('../utility/readJWTPassword.js')
const { readToken } = require('../utility/readToken.js')

class AuthService {
    async login(body) {
        const {login, pass, repeatPass} = body

        if (pass != repeatPass) {
            
            return {"message": "Пароли не совпадают!"}

        } else if (login.length < 5 || pass.length < 5) {
            
            return {"message": "Маленькая длина логина или пароля!"}
            
        } else {
            const jwtpass = createJWTPassword(pass)
            
            const accessToken = createToken(login, '30m')
            const refreshToken = createToken(login, '30d')

            const createUser = await db.query('INSERT INTO users(login, pass, ref_token) VALUES($1, $2, $3) RETURNING *', [login, jwtpass, refreshToken])

            console.log('J',jwtpass, 'A', accessToken, 'R', refreshToken)
            console.log(createUser.rows)
            const rows = createUser.rows

            return {"message": "Пользователь создан!", "accessToken": `${accessToken}`, rows}
        }
    }

    async auth(body, res) {
        const {login, pass} = body

        const nickname = await db.query('SELECT * FROM users WHERE login = $1', [login])
        const isPass = nickname.rows[0].pass
        const readPass = readJWTPassword(isPass)

        if(pass == readPass.pass) {
            const accessToken = createToken(login, '30m')
            const refreshToken = createToken(login, '30d')
            
            await db.query('UPDATE users SET ref_token = $1', [refreshToken])

            res.cookie('accessToken', accessToken, {
                httpOnly: true
            })
            
            return {"message": `Добро пожаловать ${login}!`}
        
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
        const whatIsuser = req.cookies.accessToken
        const nickname = readToken(whatIsuser)
        
        const userProfile = await db.query('SELECT * FROM users WHERE login = $1', [nickname.jwtPass.nickname])
        
        const rows = userProfile.rows[0]

        return rows
    }

    async exit(res) {
        res.clearCookie('accessToken')
        return {"mesage": "Вы вышли из аккаунта!"}
    }
}

module.exports = new AuthService 