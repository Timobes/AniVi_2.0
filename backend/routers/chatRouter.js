
const Router = require('express')
const chatController = require('../controllers/chatController.js')
const chatRouter = new Router()

chatRouter.get('/', chatController.name)

module.exports = chatRouter
    