const multer = require('multer')
const { readToken } = require('./readToken')
const Anime = require('../db/models/animeModel')

const storageConfig = multer.diskStorage({
    destination: async function (req, file, cb) {
        // Поиск аниме по id в БД
        let animeName

        if (file.fieldname == 'anime_poster' || file.fieldname == 'anime_moments' || file.fieldname == 'anime') {
            // anime and anime poster
            const {animeId} = req.body
    
            const animeID = await Anime.findOne({
                where: {
                    anime_id: animeId
                }}
            )

            animeName = animeID.dataValues.anime_title_eng.replaceAll(' ', '')
        }

        // user 
        let headerToken = req.cookies.accessToken
        let readHeaderToken = readToken(headerToken)
        let userName = readHeaderToken.jwtPass.username
        
        console.log(userName)

        switch (file.fieldname) {
            case 'anime_poster':
                cb(null, `static/anime/${animeName}/anime_poster`)
                break

            case 'anime_moments':
                cb(null, `static/anime/${animeName}/anime_moments`)
                break

            case 'anime':
                cb(null, `static/anime/${animeName}`)
                break

            case 'avatar':
                cb(null, `static/users/${userName}`)
                break

            default:
                break;
        }
    }, 

    filename: function (req, file, cb) {
        const {num} = req.body

        let name = file.originalname
        let index = name.indexOf(' ')
        
        if (index == -1) {
            let type = file.mimetype
            let mimeindex = type.indexOf('/')
            type = type.substring(mimeindex + 1, )

            switch (file.fieldname) {

                case 'anime_poster':
                    cb(null, `poster.${type}`)
                    break
    
                case 'anime_moments':
                    cb(null, `${file.originalname}`)
                    break
    
                case 'anime':
                    cb(null, `${num}.${type}`)
                    break;
    
                case 'avatar':
                    cb(null, `avatar.${type}`)
                    break

                default:
                    cb(null, name)
                    break;
            }
        } else {
            name = name.substring(index + 1)
        }
    }
})

const upload = multer({ storage: storageConfig  })

module.exports = upload