const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

function createToken(nickname, time) {
    jwtPass = jwt.sign({ nickname }, process.env.SECRET_TOKEN, { expiresIn: `${time}` })

    return jwtPass
}

module.exports = {createToken}