const Router  = require('express')
const authController = require('../controllers/authController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const authRouter = new Router()

// Login 
authRouter.post('/login', authController.login)

// Auth
authRouter.post('/auth', authController.auth)

// TestToken
authRouter.post('/test', checkTokenMiddleware, checkRefreshTokenMiddleware, authController.test)

// TestAdmin
authRouter.post('/admin', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, authController.admin)

// Profile
authRouter.get('/profile', checkTokenMiddleware, checkRefreshTokenMiddleware, authController.profile)

// Exit
authRouter.get('/exit', checkTokenMiddleware, authController.exit)

module.exports = authRouter