const Router = require('express')
const genreController = require('../controllers/genreController')
const { checkTokenMiddleware } = require('../middleware/checkTokenMiddleware')
const { checkRefreshTokenMiddleware } = require('../middleware/checkRefreshTokenMiddleware')
const { checkAdminMiddleware } = require('../middleware/checkAdminMiddleware')

const genreRouter = new Router()

/**
 * @swagger
 * /api/genre:
 *   get:
 *     summary: Получить все жанры
 *     tags:
 *       - Genre
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
genreRouter.get('/', genreController.GetGenre)

/**
 * @swagger
 * /api/genre/{id}:
 *   get:
 *     summary: Получить жанр по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - Genre
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
genreRouter.get('/:id', genreController.GetOneGenre)

/**
 * @swagger
 * /api/genre:
 *   post:
 *     summary: Создать новый жанр
 *     tags:
 *       - Genre
 *     responses:
 *       201:
 *         description: Успешное создание жанра
 */
genreRouter.post('/', genreController.CreateGenre)

/**
 * @swagger
 * /api/genre/{id}:
 *   delete:
 *     summary: Удалить жанр по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - Genre
 *     responses:
 *       204:
 *         description: Успешное удаление
 */
genreRouter.delete('/:id', genreController.DeleteGenre)

genreRouter.patch('/update/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, genreController)


module.exports = genreRouter