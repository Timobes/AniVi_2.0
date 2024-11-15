const Router = require('express')
const animeEpController = require('../controllers/animeEpController')
const upload = require('../utility/storage')

const animeEpRouter = new Router()

animeEpRouter.get('/', animeEpController.getEp)

animeEpRouter.post('/', upload.single('anime'), animeEpController.createEp)

module.exports = animeEpRouter