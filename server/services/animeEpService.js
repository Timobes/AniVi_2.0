const AnimeEp = require("../db/models/animeEpModel")
const Anime = require("../db/models/animeModel")
const User = require("../db/models/userModel")
const { readToken } = require("../utility/readToken")
const logger = require("../logging/logger")

class AnimeEpService {
    async getEp(body) {
        try {
            const ep = ''

            return ep
        } catch (error) {
            logger.error(error)
        }
    }

    async createEp(req) {
        try {
            const { name, num, animeId } = req.body

            let headerToken = req.cookies.accessToken
            let readHeaderToken = readToken(headerToken)
            let userName = readHeaderToken.jwtPass.username

            const nameUser = await User.findOne({
                where: {
                    username: userName
                }
            })

            const animeID = await Anime.findOne({
                where: {
                    anime_id: animeId
                }}
            )

            let animeName = animeID.dataValues.anime_title_eng.replaceAll(' ', '')

            const ep = await AnimeEp.create({
                anime_ep_name: name,
                anime_ep_num: num,
                anime_id: animeId,
                video_url: `localhost:8080/anime/${animeName}/${num}.mp4`,
                user_id: nameUser.dataValues.user_id
            })

            return ep

        } catch (error) {
            logger.error(error)
        }
    }

    async Update(req) {
        try {
            const id = req.params.id
            const updates = req.body
            
            for (let obj in updates) {
                if (updates[obj] === '') {
                    delete updates[obj];
                }
            }

            const data = await AnimeEp.update(
                updates,
                {
                    where: {
                        anime_ep_id: id
                    }
                }
            )

            return data
        } catch (error) {
            logger.error
        }
    }
}

module.exports = new AnimeEpService