const {readToken} = require('../utility/readToken')
const db = require('../db/db')

const dotenv = require('dotenv')
dotenv.config()

async function checkAdminMiddleware(req, res, next) {
    try {
        // let headerToken = req.headers.authorization
        let headerToken = req.cookies.accessToken

        // headerToken = headerToken.replace('Bearer ', '')
        let readHeaderToken = readToken(headerToken)

        const user = await db.query("SELECT role_id FROM users WHERE login = $1", [readHeaderToken.jwtPass.nickname])

        if (user.rows[0].role_id === 9) {
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