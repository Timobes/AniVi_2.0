const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
dotenv.config()

function readRefreshToken(token) {
    try {
        let jwtPass = jwt.verify(token, process.env.SECRET_TOKEN, {ignoreExpiration: true})

        jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded) {
            if (err && err.name === 'TokenExpiredError') {
                jwtPass = null
            } else {
                console.log('Ref Token is valid');
            }
        });
        
        return jwtPass
    } catch (error) {
        console.log(error)
        return 0
    } 
}

module.exports = {readRefreshToken}