const User = require("../db/models/userModel")
const logger = require("../logging/logger")
const { readToken } = require("../utility/readToken")
// const fs = require('fs')
// const path = require('path')

class UserService {
    async GetUsers () {
        try {
            const user = await User.findAll()

            return user
        } catch (error) {
            logger.error(error)
        }
    }

    async GetOneUser (id) {
        try {
            const user = await User.findOne({
                where: {
                    user_id: id
                }
            })
            logger.error('вывод пользователя')
            return user
        } catch (error) {
            logger.error(error)
            logger.error(error)
        }
    }

    async DeleteUser (id) {
        try {
            const user = await User.destroy({
                where: {
                    user_id: id
                }
            })

            return user
        } catch (error) {
            logger.error(error)
        }
    }

    async CreateAvatar () {
        try {

            return {message: "вы добавили аватар!"}
        } catch (error) {
            logger.error(error)
        }
    }

    async GetAvatar (req) {
        try {
            // let headerToken = req.cookies.accessToken
            // let readHeaderToken = readToken(headerToken)
            // let userName = readHeaderToken.jwtPass.username
            
            // let pathFile = path.join(__dirname, `../static/users/${userName}/avatar.jpeg`)

            const id = req.params.id

            const user = await User.findOne({
                attributes: ['username'],
                
                where: {
                    user_id: id
                }
            })

            const userName = user.dataValues.username

            let file = `http://localhost:8080/users/${userName}/avatar.jpeg`

            // fs.access(pathFile, fs.constants.F_OK, (err) => {
            //     if (err) {
            //         console.log('lox')
            //         return {message: ""}
            //     } else {
            //         return {"message": `${file}`}
            //     }
            // });
            

            return {message: `${file}`}
        } catch (error) {
            logger.error(error)
        }
    }

    async GetMyAvatar (req) {
        try {
            let headerToken = req.cookies.accessToken
            let readHeaderToken = readToken(headerToken)
            let userName = readHeaderToken.jwtPass.username

            let file = `http://localhost:8080/users/${userName}/avatar.jpeg`

            return {message: `${file}`}
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = new UserService