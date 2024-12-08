const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
const { createToken } = require('./createToken');
dotenv.config()

function readToken(token) {
    try {
        let jwtPass = jwt.verify(token, process.env.SECRET_TOKEN, {ignoreExpiration: true})

        jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded) {
            if (err && err.name === 'TokenExpiredError') {
                token = createToken(jwtPass.username, '30m')
                
                let returnedFunc = readToken(token)
            } 
        });
        
        return {jwtPass, "newToken": token}
    } catch (error) {
        logger.error(error)
        // res.json("error")
        return {"message": "ошибка"}
    } 
}

module.exports = {readToken}