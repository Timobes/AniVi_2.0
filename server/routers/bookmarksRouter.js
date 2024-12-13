const Router = require('express')
const bookmarksController = require('../controllers/bookmarksController.js')
const bookmarksRouter = new Router()

/**
 * @swagger
 * /api/bookmarks:
 *   post:
 *     summary: Добавить книгу в закладки
 *     tags:
 *       - Bookmarks
 *     responses:
 *       201:
 *         description: Успешное добавление книги
 */
bookmarksRouter.post('/', bookmarksController.addBook)

/**
 * @swagger
 * /api/bookmarks/{id}:
 *   get:
 *     summary: Получить книгу по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - Bookmarks
 *     responses:
 *       200:
 *         description: Успешный ответ
 */

bookmarksRouter.get('/:id', bookmarksController.getBookOneUser)

/**
 * @swagger
 * /api/bookmarks/{id}:
 *   delete:
 *     summary: Удалить книгу по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - Bookmarks
 *     responses:
 *       204:
 *         description: Успешное удаление
 */
bookmarksRouter.delete('/:id', bookmarksController.deleteBook)

module.exports = bookmarksRouter
    