const userService = require("../services/userService")
const logger = require("../logging/logger")

class UserController {
    async GetUsers (req, res) {
        try {
            const user = await userService.GetUsers()

            res.json(user)
        } catch (error) {
            logger.error(error)
        }
    }

    async GetOneUser (req, res) {
        try {
            const user = await userService.GetOneUser(req.params.id)

            res.json(user)
        } catch (error) {
            logger.error(error)
        }
    }

    async DeleteUser (req, res) {
        try {
            const user = await userService.DeleteUser(req.params.id)

            res.json(user)
        } catch (error) {
            logger.error(error)
        }
    }

    async CreateAvatar (req, res) {
        try {
            const avatar = await userService.CreateAvatar()

            res.json(avatar)
        } catch (error) {
            logger.error(error)
        }
    }

    async GetAvatar (req, res) {
        try {
            const avatar = await userService.GetAvatar(req)

            res.json(avatar)
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = new UserController