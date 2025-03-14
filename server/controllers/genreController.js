const logger = require("../logging/logger")
const genreService = require("../services/genreService")

class GenreController {
    async GetGenre (req, res) {
        try {
            const genre = await genreService.GetGenre()

            res.json(genre)
        } catch (error) {
            logger.error(error)
        }
    }

    async GetOneGenre (req, res) {
        try {
            const genre = await genreService.GetOneGenre(req.params.id)

            res.json(genre)
        } catch (error) {
            logger.error(error)
        }
    }

    async CreateGenre (req, res) {
        try {
            const genre = await genreService.CreateGenre(req.body)

            res.json({"Жанр создан": genre})
        } catch (error) {
            logger.error(error)
        }
    }

    async DeleteGenre (req, res) {
        try {
            const genre = await genreService.DeleteGenre(req.params.id)

            res.json(genre)
        } catch (error) {
            logger.error(error)
        }
    }

    async Update (req, res) {
        try {
            const genre = await genreService.Update(req)

            res.json(genre)
        } catch (error) {
           logger.error(error) 
        } 
    }
}

module.exports = new GenreController