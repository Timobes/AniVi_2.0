
const ChatService = require('../services/ChatService.js')
class ChatController {
    async name(req, res) {
        try {
            const test = ChatService.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new ChatController