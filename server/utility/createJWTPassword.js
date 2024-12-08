const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

function createJWTPassword(pass) {
    jwtPass = jwt.sign({pass}, process.env.SECRET_TOKEN)

    return jwtPass
}

module.exports = {createJWTPassword}