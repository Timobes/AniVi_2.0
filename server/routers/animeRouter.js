const Router = require("express");
const animeController = require("../controllers/animeController");
const { checkAdminMiddleware } = require("../middleware/checkAdminMiddleware");
const { checkRefreshTokenMiddleware } = require("../middleware/checkRefreshTokenMiddleware");
const { checkTokenMiddleware } = require("../middleware/checkTokenMiddleware");
const upload = require("../utility/storage");

const animeRouter = new Router()

/**
 * @swagger
 * /api/anime:
 *   get:
 *     summary: Получить все аниме
 *     tags:
 *       - Anime
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
animeRouter.get('/', animeController.getAllAnime)

/**
 * @swagger
 * /api/anime/{id}:
 *   get:
 *     summary: Получить аниме по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - Anime
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
animeRouter.get('/:id', animeController.getOneAnime)

/**
 * @swagger
 * /api/anime:
 *   post:
 *     summary: Создать новое аниме
 *     tags:
 *       - Anime
 *     responses:
 *       201:
 *         description: Успешное создание аниме
 */
animeRouter.post('/', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.createAnime)


/**
 * @swagger
 * /api/anime/{id}:
 *   delete:
 *     summary: Удалить аниме по id
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         schema: 
 *           type: integer
 *     tags:
 *       - Anime
 *     responses:
 *       204:
 *         description: Успешное удаление
 */
animeRouter.delete('/:id', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, animeController.deleteAnime)

/**
 * @swagger
 * /api/anime/poster:
 *   post:
 *     summary: Загрузить постер аниме
 *     tags:
 *       - Anime
 *     responses:
 *       201:
 *         description: Успешная загрузка постера
 */
animeRouter.post('/poster', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, upload.single('anime_poster'), animeController.sendPoster)

/**
 * @swagger
 * /api/anime/moments:
 *   post:
 *     summary: Загрузить моменты аниме
 *     tags:
 *       - Anime
 *     responses:
 *       201:
 *         description: Успешная загрузка моментов
 */
animeRouter.post('/moments', checkTokenMiddleware, checkRefreshTokenMiddleware, checkAdminMiddleware, upload.fields([{name: 'anime_moments', maxCount: 10}]), animeController.sendMoments)

module.exports = animeRouter
