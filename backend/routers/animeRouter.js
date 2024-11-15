const Router = require("express");
const animeController = require("../controllers/animeController");
const { checkAdminMiddleware } = require("../middleware/checkAdminMiddleware");
const { checkRefreshTokenMiddleware } = require("../middleware/checkRefreshTokenMiddleware");
const { checkTokenMiddleware } = require("../middleware/checkTokenMiddleware");
const upload = require("../utility/storage");

const animeRouter = new Router()

animeRouter.get('/', animeController.getAllAnime)

animeRouter.get('/:id', animeController.getOneAnime)

animeRouter.post('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.createAnime)

animeRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.deleteAnime)

animeRouter.post('/poster', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, upload.single('anime_poster'), animeController.sendPoster)

animeRouter.post('/moments', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, upload.fields([{name: 'anime_moments', maxCount: 10}]), animeController.sendMoments)

module.exports = animeRouter
