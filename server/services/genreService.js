const logger = require("../logging/logger")
const Genre = require("../db/models/genreModel")

class GenreService {
    async GetGenre () {
        try {
            const genre = await Genre.findAll()

            return genre
        } catch (error) {
            logger.error(error)
        }
    }

    async GetOneGenre (id) {
        try {
            const genre = await Genre.findOne({
                where:{
                    genre_id: id
                } 
            })

            return genre
        } catch (error) {
            logger.error(error)
        }
    }

    async CreateGenre (body) {
        try {
            const {name} = body

            const genre = await Genre.create({
                name: name
            })

            return genre
        } catch (error) {
            logger.error(error)
        }
    }

    async DeleteGenre (id) {
        try {
            const genre = await Genre.destroy({
                where: {
                    genre_id: id
                }
            })

            return genre
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = new GenreService