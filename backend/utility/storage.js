const multer = require('multer')

const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {

        console.log(file)

        // anime and anime poster
        let name = file.originalname.replaceAll(' ', '')
        let index = name.indexOf('.')
        name = name.substring(0, index)

        // anime_moments
        let newname = file.originalname
        let indexes = newname.indexOf(' ')
        newname = newname.substring(0, indexes)
        
        switch (file.fieldname) {
            case 'anime_poster':
                cb(null, `static/anime/${name}/anime_poster`)
                break

            case 'anime_moments':
                cb(null, `static/anime/${newname}/anime_moments`)
                break

            case 'anime':
                cb(null, `static/anime/${name}`)
                break

            case 'avatar':
                cb(null, `static/users/${name}`)
                break

            default:
                break;
        }
    }, 

    filename: function (req, file, cb) {
        let name = file.originalname
        let index = name.indexOf(' ')
        
        if (index == -1) {
            console.log('неправильно названный файл!')

            // Создать обработчик для таких случаев
            cb(null, name)

        } else {
            name = name.substring(index + 1)
        }

        // cb(null, name)
    }
})

const upload = multer({ storage: storageConfig  })

module.exports = upload