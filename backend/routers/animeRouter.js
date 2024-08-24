const Router = require("express");
const animeController = require("../controllers/animeController");

const animeRouter = new Router()

animeRouter.get('/', animeController.getAllAnime)

animeRouter.get('/:id', animeController.getOneAnime)

animeRouter.post('/', animeController.createAnime)

animeRouter.delete('/:id', animeController.deleteAnime)

module.exports = animeRouter
