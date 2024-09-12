const animeService = require("../services/animeService")

class AnimeController {
    async getAllAnime(req, res) {
        try {
            const anime = await animeService.getAllAnime()

            res.json(anime)
        } catch (error) {
            console.log(error)
        }        
    }

    async getOneAnime(req, res) {
        try {
            const anime = await animeService.getOneAnime(req.params.id)

            res.json(anime)
        } catch (error) {
            console.log(error)
        }        
    }

    async createAnime(req, res) {
        try {
            const anime = await animeService.createAnime(req.body)

            res.json(anime)
        } catch (error) {
            console.log(error)
        }        
    }

    async deleteAnime(req, res) {
        try {
            const anime = await animeService.deleteAnime(req.params.id)
            console.log(`anime с id ${anime} удалено`)
            res.json(anime)
        } catch (error) {
            console.log(error)
        }        
    }

    
}

module.exports = new AnimeController