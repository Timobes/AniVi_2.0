const Router = require('express')
const userController = require('../controllers/userController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')
const upload  = require('../utility/storage')

const userRouter = new Router()

// Load all users  
userRouter.get('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.GetUsers)

// Load user on id
userRouter.get('/:id', userController.GetOneUser)

// Delete user on id
userRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.DeleteUser)

// Submit user avatar
userRouter.post('/avatar', upload.single('avatar'), userController.CreateAvatar)

module.exports = userRouter