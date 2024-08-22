const User = require('../db/models/userModel')
const {readToken} = require('../utility/readToken')

const dotenv = require('dotenv')
dotenv.config()

async function checkAdminMiddleware(req, res, next) {
    try {
        let headerToken = req.cookies.accessToken
        let readHeaderToken = readToken(headerToken)

        // const user = await db.query("SELECT role_id FROM users WHERE login = $1", [readHeaderToken.jwtPass.nickname])
        const user = await User.findOne({where: {username: readHeaderToken.jwtPass.nickname}})

        if (user.dataValues.role === 9) {
            console.log('Админ прошёл проверку')
            next()
        } else {
            console.log("У вас недостаточно прав!")
            return res.json({"message": "У вас недостаточно прав!"})
        }
    } catch (error) {
        console.log(error)
        return {"message":"Ошибка!"}
    }
}

module.exports = {checkAdminMiddleware}