const Router = require('express')
const userController = require('../controllers/userController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')
const upload  = require('../utility/storage')

const userRouter = new Router()


userRouter.get('/avatar/:username', userController.GetAvatar)

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


/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Удалить пользователя по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - User
 *     responses:
 *       204:
 *         description: Успешное удаление
 */
userRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, userController.DeleteUser)

/**
 * @swagger
 * /api/user/avatar:
 *   post:
 *     summary: Загрузить аватар пользователя
 *     tags:
 *       - User
 *     responses:
 *       201:
 *         description: Успешная загрузка аватара
 */
userRouter.post('/avatar', checkTokenMiddleware, checkRefreshTokenMiddleware, upload.single('avatar'), userController.CreateAvatar)

module.exports = userRouter