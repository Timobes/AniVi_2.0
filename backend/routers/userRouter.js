const Router = require('express')
const userController = require('../controllers/userController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')

const userRouter = new Router()

userRouter.get('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.GetUsers)

userRouter.get('/:id', userController.GetOneUser)

userRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.DeleteUser)

module.exports = userRouter