
const Router = require('express')
const lastEpController = require('../controllers/lastEpController.js')
const lastEpRouter = new Router()

lastEpRouter.get('/', lastEpController.name)

module.exports = lastEpRouter
    