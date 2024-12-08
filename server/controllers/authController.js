const authService = require("../services/authService")
const logger = require("../logging/logger")

class AuthController {

    async login(req, res) {
        try {
            const user = await authService.login(req.body)

            res.status(user.status).json({message: user.message, rows: user.rows})
        } catch (error) {
           logger.error(error) 
        }
    }

    async auth(req, res) {
        try {
            const user = await authService.auth(req.body, res)

            res.json(user)
        } catch (error) {
           logger.error(error) 
        }
    }

    async admin(req, res) {
        try {
            const user = await authService.admin(req)

            res.json(user)
        } catch (error) {
            logger.error(error)
        }
    }

    async profile(req, res) {
        try {
            const user = await authService.profile(req, res)

            res.json(user)
        } catch (error) {
            logger.error(error)
        }
    }

    async exit(req, res) {
        try {
            const user = await authService.exit(res)

            res.json(user)
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = new AuthController