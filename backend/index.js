const express = require('express')
const app = express()
const router = require('./routers/mainRouter')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const db = require('./db/db')

const dotenv = require('dotenv');

const Anime = require('./db/models/animeModel');
const User = require('./db/models/userModel');
const AnimeEp = require('./db/models/animeEpModel');
const Genre = require('./db/models/genreModel');
const AnimeGenre = require('./db/models/animeGenreModel');

dotenv.config()

const port = process.env.BACK_PORT || 8080

// ------------------------------

// Anime.sync()
// User.sync()
// AnimeEp.sync()
// Genre.sync()
// AnimeGenre.sync()

// console.log(Anime, User, AnimeEp, Genre, AnimeGenre)


// User.findAll({
//   include: [{
//     model: Anime,
//     where: {
//       user_id: 1
//     }
//   }]
// })
//   .then(users => {
//     console.log(users[0].dataValues.animes)
//   })

//   .catch(err => {
//     console.log(err)
//   })
// User.create({
//     username: 'janedoe',
//     age: 21
// });

// User.findAll()
//   .then(users => {
//     console.log(users);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// User.findOne({
//   where: {
//     id: 1
//   }
// }) 
// .then(users => {
//     console.log(users.dataValues);
// })
// .catch(error => {
//     console.error('Error:', error);
// });

// ------------------------------

db.sync()

app.use(express.static('static'))

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