const { DataTypes } = require("sequelize");
const db = require("../db");
const Anime = require("./animeModel");
const User = require("./userModel");

const AnimeEp = db.define('anime_ep', {
    anime_ep_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },

    anime_ep_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    anime_ep_num: {
        type: DataTypes.INTEGER,
    },

    anime_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Anime,
            key: 'anime_id'
        },
    },

    video_url: {
        type: DataTypes.STRING,
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    }
})

User.hasMany(AnimeEp, {foreignKey: 'user_id'})
AnimeEp.belongsTo(User, {foreignKey: 'user_id'})

Anime.hasMany(AnimeEp, {foreignKey: 'anime_id'})
AnimeEp.belongsTo(Anime, {foreignKey: 'anime_id'})

module.exports = AnimeEp