const express = require('express')
const app = express()
const router = require('./routers/mainRouter')

const cors = require('cors')
const cookieParser = require('cookie-parser');
const db = require('./db/db')

const dotenv = require('dotenv');
const httpLogger = require('./logging/httpLoger');
const logger = require('./logging/logger');

dotenv.config()

const port = process.env.BACK_PORT || 8080

db.sync()

app.use(express.static('static'))
app.use(express.json())

app.use(cookieParser());

app.use(httpLogger)

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: [
      "set-cookie",
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
}))

app.use('/api', router)

app.get('/', function(req, res){
    res.send('<h1>Hello AniVi 2.0 backend!</h1>')
})

app.listen(port, logger.info(`Backend is run ${port} port`))

module.exports = app