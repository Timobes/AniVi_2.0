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
            const getAnimeName = await Bookmarks.findAll({
                where: { user_id: id },
                include: [
                    {
                        model: Anime,
                        // attributes: ['anime_title_rus', 'anime_title_eng', 'anime_title_jap'],
                    }
                ],
                attributes: ['book_id']
            })

            return getAnimeName
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteBook(id) {
        try {
            const book = await Bookmarks.destroy({
                where: {
                    book_id: id
                }
            })

            return book
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new BookmarksService 
    