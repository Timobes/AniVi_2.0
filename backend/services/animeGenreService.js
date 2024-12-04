const AnimeGenre = require("../db/models/animeGenreModel")
const Genre = require("../db/models/genreModel")
const logger = require("../logging/logger")

class AnimeGenreService {
    async getAll(id) {
        try {
            const takeAnimeGenreId = await AnimeGenre.findAll({
                attributes: ["genre_id"],
                where: {
                    anime_id: id
                }
            })

            let mas = []

            for (let i = 0; i < takeAnimeGenreId.length; i++) {
                mas.push(takeAnimeGenreId[i].dataValues.genre_id)
            }

            const animeGenre = await AnimeGenre.findAll({
                attributes: [],

                where: {
                    anime_id: id
                }, 

                include: [
                    {
                        model: Genre,
                        
                        where: {
                            genre_id: mas
                        },

                        attributes: ["name"],
                    }
                ]
            })

            const allGenres = animeGenre.map(animeGenre => {
                return animeGenre.dataValues.genres.map(genre => genre.dataValues);
            }).flat(); 

            return allGenres
        } catch (error) {
            logger.error(error) 
        }
    }

    async create(body) {
        try {
            const {genre, anime} = body

            const animeGenre = await AnimeGenre.create({
                genre_id: genre,
                anime_id: anime
            })

            return animeGenre
        } catch (error) {
            logger.error(error) 
        }
    }

    async Delete(id) {
        try {
            const genre = await AnimeGenre.destroy({
                where: {
                    table_id: id
                }
            })

            return genre
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new AnimeGenreService 
    