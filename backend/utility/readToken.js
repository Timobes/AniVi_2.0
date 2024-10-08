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
            } else {
                console.log('Token is valid');
            }
        });
        
        return {jwtPass, "newToken": token}
    } catch (error) {
        console.log(error)
        // res.json("error")
        return {"message": "ошибка"}
    } 
}

module.exports = {readToken}