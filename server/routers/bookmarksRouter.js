const Router = require('express')
const bookmarksController = require('../controllers/bookmarksController.js')
const bookmarksRouter = new Router()

bookmarksRouter.post('/', bookmarksController.addBook)

bookmarksRouter.get('/:id', bookmarksController.getBookOneUser)

bookmarksRouter.delete('/:id', bookmarksController.deleteBook)

module.exports = bookmarksRouter
    