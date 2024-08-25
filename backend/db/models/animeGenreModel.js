const { DataTypes } = require("sequelize");
const db = require("../db");
const Genre = require("./genreModel");
const Anime = require("./animeModel");

const AnimeGenre = db.define('anime_genre', {
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            key: "genre_id"
        }
    },

    anime_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Anime,
            key: 'anime_id'
        },
    },
})

AnimeGenre.hasMany(Genre, {foreignKey: 'genre_id'})
Genre.belongsTo(AnimeGenre, {foreignKey: 'genre_id'})

Anime.hasMany(AnimeGenre, {foreignKey: 'anime_id'})
AnimeGenre.belongsTo(Anime, {foreignKey: 'anime_id'})

module.exports = AnimeGenre