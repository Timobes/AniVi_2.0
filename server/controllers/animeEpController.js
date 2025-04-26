const animeEpService = require("../services/animeEpService")
const logger = require("../logging/logger")

class AnimeEpController {
    async getEp(req, res) {
        try {
            const ep = await animeEpService.getEp(req.body)

            res.json({ "message": ep })
        } catch (error) {
            logger.error(error)
        }
    }

    async createEp(req, res) {
        try {
            const ep = await animeEpService.createEp(req)

            res.json({ "message": ep })
        } catch (error) {
            logger.error(error)
        }
    }

    async Update(req, res) {
        try {
            const ep = await animeEpService.Update(req)

            res.json({ "message": ep })
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = new AnimeEpController