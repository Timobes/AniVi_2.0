
const LastEpService = require('../services/LastEpService.js')
class LastEpController {
    async name(req, res) {
        try {
            const test = LastEpService.test()

            res.json({"message":"test"})
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new LastEpController