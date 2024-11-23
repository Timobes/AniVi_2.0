const User = require("../db/models/userModel")

class UserService {
    async GetUsers () {
        try {
            const user = await User.findAll()

            return user
        } catch (error) {
            console.log(error)
        }
    }

    async GetOneUser (id) {
        try {
            const user = await User.findOne({
                where: {
                    user_id: id
                }
            })

            return user
        } catch (error) {
            console.log(error)
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
            console.log(error)
        }
    }

    async CreateAvatar () {
        try {

            return {message: "вы добавили аватар!"}
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserService