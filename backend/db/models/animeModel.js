const { DataTypes } = require('sequelize')
const db = require('../db')
const User = require('./userModel')

const Anime = db.define('anime', {
    anime_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,    
    },

    anime_title_rus: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    
    anime_title_eng: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    anime_title_jap: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    year: {
        type: DataTypes.DATE,
        allowNull: false
    },

    poster_url: {
        type: DataTypes.STRING,
        allowNull: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    }
}, {
    timestamps: false,
})

User.hasMany(Anime, { foreignKey: 'user_id' });
Anime.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Anime

