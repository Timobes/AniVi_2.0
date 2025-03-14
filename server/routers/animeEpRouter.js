const Router = require('express')
const animeEpController = require('../controllers/animeEpController')
const upload = require('../utility/storage')

const animeEpRouter = new Router()

// Get ep on id anime and num ep - /api/ep/:animeid/:epnum 
// not work

/**
 * @swagger
 * /api/ep:
 *   get:
 *     summary: Получить эпизоды аниме
 *     tags:
 *       - Anime Episodes
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
animeEpRouter.get('/', animeEpController.getEp)

/**
 * @swagger
 * /api/ep:
 *   post:
 *     summary: Создать новый эпизод аниме
 *     tags:
 *       - Anime Episodes
 *     responses:
 *       201:
 *         description: Успешное создание эпизода
 */
animeEpRouter.post('/', upload.single('anime'), animeEpController.createEp)

animeEpRouter.update('/update/:id', animeEpController.update)

module.exports = animeEpRouter