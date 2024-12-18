const Router  = require('express')
const authController = require('../controllers/authController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const { userValidationRules, validate } = require('../middleware/validationMiddleware')
const authRouter = new Router()

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: РЕГИСТРАЦИЯ пользователя
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Успешная РЕГИСТРАЦИЯ
 */
authRouter.post('/login', userValidationRules(), validate, authController.login)

/**
 * @swagger
 * /api/auth/auth:
 *   post:
 *     summary: Проверка авторизации
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Успешная проверка
 */
authRouter.post('/auth', userValidationRules(), validate, authController.auth)

/**
 * @swagger
 * /api/auth/admin:
 *   post:
 *     summary: Проверка прав администратора
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Успешная проверка прав администратора
 */
authRouter.post('/admin', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, authController.admin)

/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     summary: Получить профиль пользователя
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
authRouter.get('/profile', checkTokenMiddleware, checkRefreshTokenMiddleware, authController.profile)

/**
 * @swagger
 * /api/auth/exit:
 *   get:
 *     summary: Выход пользователя
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Успешный выход
 */
authRouter.get('/exit', checkTokenMiddleware, authController.exit)

module.exports = authRouter