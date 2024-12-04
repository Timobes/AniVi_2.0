const Router = require('express')
const genreController = require('../controllers/genreController')

const genreRouter = new Router()

// get all 
genreRouter.get('/', genreController.GetGenre)

// get one
genreRouter.get('/:id', genreController.GetOneGenre)

// create
genreRouter.post('/', genreController.CreateGenre)

// delete on id
genreRouter.delete('/:id', genreController.DeleteGenre)

module.exports = genreRouter