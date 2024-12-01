const { where } = require("sequelize")
const { model } = require("../db/db")
const Bookmarks = require("../db/models/bookMarksModel")
const User = require("../db/models/userModel")

class BookmarksService {
    async getAll(req, res) {
        try {
            const test = BookmarksService.test()

           return test
        } catch (error) {
            console.log(error) 
        }
    }

    async getOne(req, res) {
        try {
            const test = BookmarksService.test()

           return test
        } catch (error) {
            console.log(error) 
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
            console.log(error) 
        }
    }

    async getBookOneUser(id) {
        try {
            const book = await Bookmarks.getAll({
                where: {
                    user_id: id
                },

                include: [
                    {
                        model: User,

                        where: {
                            
                        }
                    }
                ]
            })

           return test
        } catch (error) {
            console.log(error) 
        }
    }

    async deleteBook(req, res) {
        try {
            const test = BookmarksService.test()

           return test
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new BookmarksService 
    