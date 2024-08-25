const genreService = require("../services/genreService")

class GenreController {
    async GetGenre (req, res) {
        try {
            const genre = await genreService(req.body)

            res.json(genre)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new GenreController