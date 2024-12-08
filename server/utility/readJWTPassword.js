const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

function readJWTPassword(pass) {
    let jwtPass = jwt.decode(pass)

    return jwtPass
}

module.exports = {readJWTPassword}