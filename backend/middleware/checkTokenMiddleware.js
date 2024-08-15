const {readToken} = require('../utility/readToken')
const db = require('../db/db')

const dotenv = require('dotenv')
dotenv.config()

async function checkTokenMiddleware(req, res, next) {
    try {
        // let headerToken = req.headers.authorization
        let headerToken = req.cookies.accessToken

        // headerToken = headerToken.replace('Bearer ', '')
        let readHeaderToken = readToken(headerToken)
        
        let refreshToken = await db.query('SELECT * FROM users WHERE login = $1', [readHeaderToken.jwtPass.nickname])
        refreshToken = refreshToken.rows[0].ref_token
        let readRefreshToken = readToken(refreshToken)
        
        if(readHeaderToken.jwtPass.nickname == readRefreshToken.jwtPass.nickname) {
            console.log('Доступ предоставлен!')
            
            // req.token = readHeaderToken.newToken
            
            res.cookie('accessToken', readHeaderToken.newToken, {
                httpOnly: true
            })

            next()            
        } else {
            res.json({"message":"Доступ заблокирован!"})
        }
    } catch (error) {
        console.log(error)
        return {"message":"Доступ заблокирован!"}
    }
}

module.exports = {checkTokenMiddleware}