const userService = require("../services/userService")

class UserController {
    async GetUsers (req, res) {
        try {
            const user = await userService.GetUsers()

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async GetOneUser (req, res) {
        try {
            const user = await userService.GetOneUser(req.params.id)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async DeleteUser (req, res) {
        try {
            const user = await userService.DeleteUser(req.params.id)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async CreateAvatar (req, res) {
        try {
            const avatar = await userService.CreateAvatar()

            res.json(avatar)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new UserController