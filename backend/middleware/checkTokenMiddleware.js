const {readToken} = require('../utility/readToken')

const dotenv = require('dotenv')
const User = require('../db/models/userModel')
dotenv.config()

async function checkTokenMiddleware(req, res, next) {
    try {
        let headerToken = req.cookies.accessToken
        let readHeaderToken = readToken(headerToken)
        
        let refreshToken = await User.findOne({where: {username: readHeaderToken.jwtPass.username}})

        refreshToken = refreshToken.dataValues.ref_token
        let readRefreshToken = readToken(refreshToken)
        
        if(readHeaderToken.jwtPass.username == readRefreshToken.jwtPass.username) {
            console.log('Доступ предоставлен!')
            
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