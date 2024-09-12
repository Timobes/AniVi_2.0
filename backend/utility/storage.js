const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(req)
        console.log(file)
        switch (file.fieldname) {
            case 'anime':
                cb(null, 'static/anime')
                break;
            
            case 'avatar':
                cb(null, 'static/avatar')
                break

            default:
                break;
        }
    }, 

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage  })

module.exports = {storage, upload}