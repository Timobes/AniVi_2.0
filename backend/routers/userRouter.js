const Router = require('express')
const userController = require('../controllers/userController')

const userRouter = new Router()

userRouter.get('/', userController.GetUser)

module.exports = userRouter