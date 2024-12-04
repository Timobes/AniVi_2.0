const BookmarksService = require('../services/bookmarksService.js')
const logger = require("../logging/logger")

class BookmarksController {
    async getAll(req, res) {
        try {
            const test = BookmarksService.test()

            res.json({"message":"test"})
        } catch (error) {
            logger.error(error) 
        }
    }

    async getOne(req, res) {
        try {
            const test = BookmarksService.test()

            res.json({"message":"test"})
        } catch (error) {
            logger.error(error) 
        }
    }

    async addBook(req, res) {
        try {
            const book = await BookmarksService.addBook(req.body)

            res.json({message: book})
        } catch (error) {
            logger.error(error) 
        }
    }

    async getBookOneUser(req, res) {
        try {
            const book = await BookmarksService.getBookOneUser(req.params.id)

            res.json({message:book})
        } catch (error) {
            logger.error(error) 
        }
    }

    async deleteBook(req, res) {
        try {
            const test = BookmarksService.test()

            res.json({"message":"test"})
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new BookmarksController