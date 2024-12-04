const AnimeGenreService = require('../services/animeGenreService.js')
const logger = require("../logging/logger")

class AnimeGenreController {
    async GetAll(req, res) {
        try {
            const animeGenre = await AnimeGenreService.getAll(req.params.id)
            res.json({"Аниме": animeGenre})
        } catch (error) {
            logger.error(error) 
        }
    }

    async create(req, res) {
        try {
            const animeGenre = await AnimeGenreService.create(req.body)

            res.json({"Жанр к аниме добавлен": animeGenre})
        } catch (error) {
            logger.error(error) 
        }
    }

    async Delete(req, res) {
        try {
            const genre = await AnimeGenreService.Delete(req.params.id)

            res.json({"message":genre})
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new AnimeGenreController