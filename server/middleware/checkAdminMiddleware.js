const User = require('../db/models/userModel')
const logger = require('../logging/logger')
const {readToken} = require('../utility/readToken')

const dotenv = require('dotenv')
dotenv.config()

async function checkAdminMiddleware(req, res, next) {
    try {
        let headerToken = req.cookies.accessToken
        let readHeaderToken = readToken(headerToken)

        const user = await User.findOne({where: {username: readHeaderToken.jwtPass.username}})

        if (user.dataValues.role === +process.env.ADMIN_ROLE) {
            logger.info('Админ прошёл проверку')
            next()
        } else {
            logger.warn("У вас недостаточно прав!")
            return res.json({"message": "У вас недостаточно прав!"})
        }
    } catch (error) {
        logger.error(error)
        return {"message":"Ошибка!"}
    }
}

module.exports = {checkAdminMiddleware}