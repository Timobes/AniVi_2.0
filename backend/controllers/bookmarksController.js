const BookmarksService = require('../services/BookmarksService.js')
class BookmarksController {
    async getAll(req, res) {
        try {
            const test = BookmarksService.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }

    async getOne(req, res) {
        try {
            const test = BookmarksService.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }

    async addBook(req, res) {
        try {
            const book = await BookmarksService.addBook(req.body)

            res.json({message: book})
        } catch (error) {
            console.log(error) 
        }
    }

    async getBookOneUser(req, res) {
        try {
            const book = await BookmarksService.getBookOneUser(req.params.id)

            res.json({message:book})
        } catch (error) {
            console.log(error) 
        }
    }

    async deleteBook(req, res) {
        try {
            const test = BookmarksService.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new BookmarksController