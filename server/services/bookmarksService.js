const Anime = require("../db/models/animeModel")
const Bookmarks = require("../db/models/bookMarksModel")
const User = require("../db/models/userModel")
const logger = require("../logging/logger")

class BookmarksService {
    async getAll(req, res) {
        try {
            const test = BookmarksService.test()

           return test
        } catch (error) {
            logger.error(error) 
        }
    }

    async getOne(req, res) {
        try {
            const test = BookmarksService.test()

           return test
        } catch (error) {
            logger.error(error) 
        }
    }

    async addBook(body) {
        try {
            const {user, anime} = body

            const book = await Bookmarks.create({
                user_id: user,
                anime_id: anime
            })

           return book
        } catch (error) {
            logger.error(error) 
        }
    }

    async getBookOneUser(id) {
        try {
            const book = await Bookmarks.findAll({
                where: {
                    user_id: id
                },
            })

            let mas = []

            for (let i = 0; i < book.length; i++) {
                mas.push(book[i].dataValues.anime_id)
            }

            const getAnimeName = await Bookmarks.findAll({
                // where: {
                //     user_id: id
                // },

                include: [
                    {
                        model: User,
                        where: { user_id: id },
                    },
                    {
                        model: Anime,
                    },
                ],
            })
            // FIXME: TODO:
            // const allBook = getAnimeName.map(animeName => {
            //     return animeName.dataValues.genres.map(genre => genre.dataValues);
            // }).flat(); 

           return getAnimeName
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteBook(req, res) {
        try {
            const test = BookmarksService.test()

           return test
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new BookmarksService 
    