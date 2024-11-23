const AnimeGenreService = require('../services/animeGenreService.js')

class AnimeGenreController {
    async GetAll(req, res) {
        try {
            const animeGenre = await AnimeGenreService.getAll(req.params.id)
            res.json({"Аниме": animeGenre})
        } catch (error) {
            console.log(error) 
        }
    }

    async create(req, res) {
        try {
            const animeGenre = await AnimeGenreService.create(req.body)

            res.json({"Жанр к аниме добавлен": animeGenre})
        } catch (error) {
            console.log(error) 
        }
    }

    async Delete(req, res) {
        try {
            const genre = await AnimeGenreService.Delete(req.params.id)

            res.json({"message":genre})
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new AnimeGenreController