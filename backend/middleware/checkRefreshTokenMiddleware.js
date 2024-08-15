const {readToken} = require('../utility/readToken')
const db = require('../db/db')

const dotenv = require('dotenv')
const { readRefreshToken } = require('../utility/readRefreshToken')
dotenv.config()

async function checkRefreshTokenMiddleware(req, res, next) {
    try {
        let headerToken = req.cookies.accessToken
        let readHeaderToken = readToken(headerToken)

        const refToken = await db.query("SELECT * FROM users WHERE login = $1", [readHeaderToken.jwtPass.nickname])
        console.log(refToken.rows[0].ref_token)
        const readRefToken = readRefreshToken(refToken.rows[0].ref_token)
        console.log(readRefToken)

        if (readRefToken == null) {
            console.log('Срок истёк!')
            res.redirect('/api/auth/exit')
        } else {
            next()
        }

    } catch (error) {
        console.log(error)
        return {"message":"Ошибка!"}
    }
}

module.exports = {checkRefreshTokenMiddleware}