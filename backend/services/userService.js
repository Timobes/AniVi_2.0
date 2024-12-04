const User = require("../db/models/userModel")
const logger = require("../logging/logger")

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
}

module.exports = new UserService