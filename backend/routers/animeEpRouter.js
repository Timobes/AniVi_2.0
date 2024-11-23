const Router = require('express')
const animeEpController = require('../controllers/animeEpController')
const upload = require('../utility/storage')

const animeEpRouter = new Router()

// Get ep on id anime and num ep - /api/ep/:animeid/:epnum 
// not work
animeEpRouter.get('/', animeEpController.getEp)

// Load ep on id anime
animeEpRouter.post('/', upload.single('anime'), animeEpController.createEp)

module.exports = animeEpRouter