const Router = require("express");
const animeController = require("../controllers/animeController");
const { checkAdminMiddleware } = require("../middleware/checkAdminMiddleware");
const { checkRefreshTokenMiddleware } = require("../middleware/checkRefreshTokenMiddleware");
const { checkTokenMiddleware } = require("../middleware/checkTokenMiddleware");

const animeRouter = new Router()

animeRouter.get('/', animeController.getAllAnime)

animeRouter.get('/:id', animeController.getOneAnime)

animeRouter.post('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.createAnime)

animeRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.deleteAnime)

module.exports = animeRouter
