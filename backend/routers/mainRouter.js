const Router = require('express')
const router = new Router()

const authRouter = require('./authRouter')
const animeRouter = require('./animeRouter')

router.use('/auth', authRouter)
router.use('/anime', animeRouter)

module.exports = router