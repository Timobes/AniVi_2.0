const Router = require('express')
const genreController = require('../controllers/genreController')

const genreRouter = new Router()

genreRouter.get('/', genreController.GetGenre)

module.exports = genreRouter