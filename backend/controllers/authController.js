const authService = require("../services/authService")

class AuthController {

    async login(req, res) {
        try {
            const user = await authService.login(req.body)

            res.json(user)
        } catch (error) {
           console.log(error) 
        }
    }

    async auth(req, res) {
        try {
            const user = await authService.auth(req.body, res)

            res.json(user)
        } catch (error) {
           console.log(error) 
        }
    }

    async test(req, res) {
        try {
            const user = await authService.test(req)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async admin(req, res) {
        try {
            const user = await authService.admin(req)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async profile(req, res) {
        try {
            const user = await authService.profile(req, res)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }

    async exit(req, res) {
        try {
            const user = await authService.exit(res)

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AuthController