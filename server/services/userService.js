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

    async CreateAvatar (req) {
        try {
            let headerToken = req.cookies.accessToken
            let readHeaderToken = readToken(headerToken)
            let userName = readHeaderToken.jwtPass.username

            const folder = `http://localhost:8080/users/${userName}/avatar.jpeg`

            const avatar = await User.update(
                { logo: folder},
                {
                    where: {
                        username: userName 
                    }
                }
            )
           
            return {message: "вы добавили аватар!"}
        } catch (error) {
            logger.error(error)
            console.log(error)
        }
    }

    async GetAvatar (username) {
        try {
            try {
                const isLogo = await User.findOne({
                    attributes: ["logo"],
                    
                    where: {
                        username: username
                    }
                })

                let logo = isLogo.dataValues.logo

                return {message: logo} 
            } catch (error) {
                return {message: "Нет такого пользователя"}
            }
               
        } catch (error) {
            logger.error(error)
        }
    } 
}

module.exports = new UserService