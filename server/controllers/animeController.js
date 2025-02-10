const logger = require("../logging/logger")
const animeService = require("../services/animeService")

class AnimeController {
    async getAllAnime(req, res) {
        try {
            const anime = await animeService.getAllAnime()

            res.json(anime)
        } catch (error) {
            logger.error(error)
        }        
    }

    async getOneAnime(req, res) {
        try {
            const anime = await animeService.getOneAnime(req.params.id)

            res.json(anime)
        } catch (error) {
            logger.error(error)
        }        
    }

    async createAnime(req, res) {
        try {
            const anime = await animeService.createAnime(req.body)

            res.json(anime)
        } catch (error) {
            logger.error(error)
        }        
    }

    async deleteAnime(req, res) {
        try {
            const anime = await animeService.deleteAnime(req.params.id)
            logger.info(`anime с id ${anime} удалено`)
            res.json(anime)
        } catch (error) {
            logger.error(error)
        }        
    }

    async sendPoster(req, res) {
        try {
            const anime = await animeService.sendPoster()

            res.json(anime)
        } catch (error) {
            logger.error(error)
        }        
    }

    async sendMoments(req, res) {
        try {
            const anime = await animeService.sendMoments()

            res.json(anime)
        } catch (error) {
            logger.error(error)
        }        
    }

    async Update(req, res) {
        try {
            const data = await animeService.Update(req)
            
            res.json(data)
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = new AnimeController