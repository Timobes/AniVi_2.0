const Router = require("express");
const animeController = require("../controllers/animeController");
const { checkAdminMiddleware } = require("../middleware/checkAdminMiddleware");
const { checkRefreshTokenMiddleware } = require("../middleware/checkRefreshTokenMiddleware");
const { checkTokenMiddleware } = require("../middleware/checkTokenMiddleware");
const upload = require("../utility/storage");

const animeRouter = new Router()

// Load all anime
animeRouter.get('/', animeController.getAllAnime)

// Load anime on id
animeRouter.get('/:id', animeController.getOneAnime)

// create anime 
animeRouter.post('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.createAnime)

// delete anime on id
animeRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.deleteAnime)

// load poster anime
animeRouter.post('/poster', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, upload.single('anime_poster'), animeController.sendPoster)

// Load anime moments 
animeRouter.post('/moments', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, upload.fields([{name: 'anime_moments', maxCount: 10}]), animeController.sendMoments)

module.exports = animeRouter
