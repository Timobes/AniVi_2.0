const Router = require('express')
const animeEpController = require('../controllers/animeEpController')

const animeEpRouter = new Router()

animeEpRouter.get('/', animeEpController.getEp)

module.exports = animeEpRouter