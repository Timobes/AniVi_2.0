const genreService = require("../services/genreService")

class GenreController {
    async GetGenre (req, res) {
        try {
            const genre = await genreService.GetGenre()

            res.json(genre)
        } catch (error) {
            console.log(error)
        }
    }

    async GetOneGenre (req, res) {
        try {
            const genre = await genreService.GetOneGenre(req.params.id)

            res.json(genre)
        } catch (error) {
            console.log(error)
        }
    }

    async CreateGenre (req, res) {
        try {
            const genre = await genreService.CreateGenre(req.body)

            res.json({"Жанр создан": genre})
        } catch (error) {
            console.log(error)
        }
    }

    async DeleteGenre (req, res) {
        try {
            const genre = await genreService.DeleteGenre(req.params.id)

            res.json(genre)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new GenreController