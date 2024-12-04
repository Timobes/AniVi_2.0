const { DataTypes } = require('sequelize')
const db = require('../db')
const User = require('./userModel')
const Anime = require('./animeModel')

const Bookmarks = db.define('bookmarks',{
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },

    anime_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Anime,
            key: 'anime_id'
        }
    }
}, {
    timestamps: false,
})

Bookmarks.hasMany(Anime, {foreignKey: 'anime_id'})
Bookmarks.hasMany(User, {foreignKey: 'user_id'})

module.exports = Bookmarks