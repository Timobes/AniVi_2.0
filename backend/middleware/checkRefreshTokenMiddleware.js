const {readToken} = require('../utility/readToken')

const dotenv = require('dotenv')
const { readRefreshToken } = require('../utility/readRefreshToken')
const User = require('../db/models/userModel')
dotenv.config()

async function checkRefreshTokenMiddleware(req, res, next) {
    try {
        let headerToken = req.cookies.accessToken
        let readHeaderToken = readToken(headerToken)

        // const refToken = await db.query("SELECT * FROM users WHERE login = $1", [readHeaderToken.jwtPass.username])
        const refToken = await User.findOne({where: {username: readHeaderToken.jwtPass.username}})

        console.log(refToken.dataValues.ref_token)
        const readRefToken = readRefreshToken(refToken.dataValues.ref_token)
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