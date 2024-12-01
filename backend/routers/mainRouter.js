const Router = require('express')
const router = new Router()

const authRouter = require('./authRouter')
const animeRouter = require('./animeRouter')
const animeEpRouter = require('./animeEpRouter')
const genreRouter = require('./genreRouter')
const userRouter = require('./userRouter')
const animeGenreRouter = require('./animeGenreRouter')
const bookmarksRouter = require('./bookmarksRouter')

router.use('/auth', authRouter)
router.use('/user', userRouter)

router.use('/anime', animeRouter)
router.use('/anime/ep', animeEpRouter)

router.use('/genre', genreRouter)
router.use('/genre/anime', animeGenreRouter)

router.use('/bookmarks', bookmarksRouter)

module.exports = router