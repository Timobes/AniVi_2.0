const Anime = require("../db/models/animeModel")
const { createAnimeFolder } = require("../utility/createAnimeFolder")

class AnimeService {
    async getAllAnime() {
        try {
            const anime = await Anime.findAll()
            
            return anime
        } catch (error) {
            console.log(error)
        }
    }

    async getOneAnime(id) {
        try {
            const anime = await Anime.findOne({
                where: {
                    anime_id: id 
                }
            })
            
            return anime
        } catch (error) {
            console.log(error)
        }
    }

    async createAnime(body) {
        try {
            const {anime_title_rus, anime_title_eng, anime_title_jap, description, year, poster_url, user_id} = body

            const anime = await Anime.create({
                anime_title_rus: anime_title_rus, 
                anime_title_eng: anime_title_eng, 
                anime_title_jap: anime_title_jap, 
                description: description, 
                year: year, 
                poster_url: poster_url, 
                user_id: user_id
            })

            createAnimeFolder(anime_title_eng)
            
            return anime
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAnime(id) {
        try {
            const anime = await Anime.destroy({
                where: {
                    anime_id: id
                }
            })
            
            return anime
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AnimeService