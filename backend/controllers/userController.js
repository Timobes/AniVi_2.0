const userService = require("../services/userService")

class UserController {
    async GetUser (req, res) {
        try {
            const user = await userService(req.body)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new UserController