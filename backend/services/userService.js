const User = require("../db/models/userModel")

class UserService {
    async GetUsers () {
        try {
            const user = User.findAll()

            return user
        } catch (error) {
            console.log(error)
        }
    }

    async GetOneUser (id) {
        try {
            const user = User.findOne({
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
            const user = User.destroy({
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