const animeEpService = require("../services/animeEpService")

class AnimeEpController {
    async getEp(req, res) {
        try {
            const ep = await animeEpService.getEp(req.body)

            res.json({ "message": ep })
        } catch (error) {
            console.log(error)
        }
    }

    async createEp(req, res) {
        try {
            const ep = await animeEpService.createEp(req)

            res.json({ "message": ep })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AnimeEpController