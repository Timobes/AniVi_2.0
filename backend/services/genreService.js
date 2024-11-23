const Genre = require("../db/models/genreModel")

class GenreService {
    async GetGenre () {
        try {
            const genre = await Genre.findAll()

            return genre
        } catch (error) {
            console.log(error)
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
            console.log(error)
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
            console.log(error)
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
            console.log(error)
        }
    }
}

module.exports = new GenreService