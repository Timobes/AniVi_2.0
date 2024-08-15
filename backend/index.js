const express = require('express')
const app = express()
const router = require('./routers/mainRouter')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const dotenv = require('dotenv')
dotenv.config()

const port = 8080

app.use(express.json())

app.use(cookieParser());

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

app.listen(port, console.log(`Backend is run ${port} port`))