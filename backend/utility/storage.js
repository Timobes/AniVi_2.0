const multer = require('multer')

const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {

        console.log(file)

        switch (file.fieldname) {

            case 'anime_poster':
                cb(null, 'static/anime/anime_posters')
                break

            case 'anime_moments':
                cb(null, 'static/anime/anime_moments')
                break;

            case 'anime':
                // let nameFolder = file.originalname
                // nameFolder.replaceAll(' ', '')

                // cb(null, `static/anime/${nameFolder}`)

                // cb(null, 'static/anime')

                break

            case 'avatar':
                cb(null, 'static/users/avatar')
                break

            default:
                break;
        }
    }, 

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storageConfig  })

module.exports = upload