const Pool = require('pg-pool')
// const dotenv = require('dotenv')
// dotenv.config()

const pool = new Pool({
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    // database: process.env.DB_DATABASE

    user: 'postgres',
    password: 'timober21',
    host: 'localhost',
    port: '5432',
    database: 'anivi2.0'
})

module.exports = pool

// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('anivi2.0', 'postgres', 'timober21', {
//     host: 'localhost',
//     dialect: 'postgres',
// })


// console.log(sequelize.models.User)
// sequelize.sync({force: true})

// module.exports = sequelize