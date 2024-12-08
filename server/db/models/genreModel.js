const { DataTypes } = require("sequelize");
const db = require("../db");

const Genre = db.define('genre', {
    genre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Genre