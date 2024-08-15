const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = User;