const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
dotenv.config()

function readRefreshToken(token) {
    try {
        let jwtPass = jwt.verify(token, process.env.SECRET_TOKEN, {ignoreExpiration: true})

        jwt.verify(token, process.env.SECRET_TOKEN, function(err, decoded) {
            if (err && err.name === 'TokenExpiredError') {
                jwtPass = null
            } 
        });
        
        return jwtPass
    } catch (error) {
        logger.error(error)
        return 0
    } 
}

module.exports = {readRefreshToken}