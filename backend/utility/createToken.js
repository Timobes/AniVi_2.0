const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

function createToken(username, time) {
    jwtPass = jwt.sign({ username }, process.env.SECRET_TOKEN, { expiresIn: `${time}` })

    return jwtPass
}

module.exports = {createToken}