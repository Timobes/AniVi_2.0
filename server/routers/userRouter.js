const Router = require('express')
const userController = require('../controllers/userController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')
const upload  = require('../utility/storage')

const userRouter = new Router()

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Получить список всех пользователей
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Успешный ответ
 */

userRouter.get('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.GetUsers)

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Получить пользователя по id 
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
userRouter.get('/:id', userController.GetOneUser)

// Delete user on id
userRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.DeleteUser)

// Submit user avatar
userRouter.post('/avatar', upload.single('avatar'), userController.CreateAvatar)

module.exports = userRouter