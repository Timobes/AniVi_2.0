const Router = require('express')
const bookmarksController = require('../controllers/bookmarksController.js')
const bookmarksRouter = new Router()

// bookmarksRouter.get('/', bookmarksController.)

// bookmarksRouter.get('/', bookmarksController.)

bookmarksRouter.post('/', bookmarksController.addBook)

bookmarksRouter.get('/:id', bookmarksController.getBookOneUser)

// bookmarksRouter.get('/', bookmarksController.)

module.exports = bookmarksRouter
    