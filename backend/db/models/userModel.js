const { DataTypes } = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    login: {
        type: DataTypes.STRING
    },

    pass: {
        type: DataTypes.STRING
    },

    ref_token: {
        type: DataTypes.STRING
    }
})

// User.sync()

// User.create({
//     login: "test",
//     pass: "test",
//     ref_token: "test"
// })


module.exports = User

