const { DataTypes } = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,    
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    ref_token: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    bio: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    logo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    role: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
},
{
    indexes: [
        { 
            unique: true,   
            name: 'unique_name',  
            fields: [db.fn('lower', db.col('username'))]   
        }
    ]
})

module.exports = User

