const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config()

// user: process.env.DB_USER,
//     // password: process.env.DB_PASSWORD,
//     // host: process.env.DB_HOST,
//     // port: process.env.DB_PORT,
//     // database: process.env.DB_DATABASE

module.exports = new Sequelize('anivi', 'postgres', 'timober', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
})

