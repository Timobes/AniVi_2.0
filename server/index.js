const express = require('express')
const app = express()
const router = require('./routers/mainRouter')

const cors = require('cors')
const cookieParser = require('cookie-parser');
const helmet = require('helmet')

const db = require('./db/db')

db.sync()

const dotenv = require('dotenv');
const httpLogger = require('./logging/httpLoger');
const logger = require('./logging/logger');

const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerOptions = {
  swaggerDefinition: {
    openai: '3.0.0',
    info: {
      title: 'AniVi Api',
      version: '1.0.0',
      description: 'Описание'
    },

    servers: [
      {
        url: "http://localhost:8080"
      }
    ]
  },

  apis: ['./routers/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

dotenv.config()

const port = process.env.BACK_PORT || 8080


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

app.use(helmet())

app.use('/api', router)

app.get('/', function(req, res){
    res.send('<h1>Hello AniVi 2.0 backend!</h1>')
})

app.listen(port, logger.info(`Backend is run ${port} port`))

module.exports = app