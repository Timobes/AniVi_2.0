const animeEpService = require("../services/animeEpService")

class AnimeEpController {

    async getEp(req, res) {
        try {
            const ep = await animeEpService(req.body)
            
            res.json(ep)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AnimeEpController