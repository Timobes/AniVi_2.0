const Router = require('express')
const animeGenreController = require('../controllers/animeGenreController.js')
const animeGenreRouter = new Router()

// get all genre in one anime
animeGenreRouter.get('/:id', animeGenreController.GetAll)

// create genre - anime
animeGenreRouter.post('/', animeGenreController.create)

// delete genre - anime
animeGenreRouter.delete('/:id', animeGenreController.Delete)

module.exports = animeGenreRouter
    