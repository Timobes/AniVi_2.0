const fs = require('fs')

function createAvatarFolder(name) {
    const paths = `static/users/${name}`

    try {
        if (!fs.existsSync(paths)){
            fs.mkdirSync(paths, {recursive: true})
            console.log(`папка ${paths} создана!`)
        }
        
    } catch (err) {
        console.error(err)
    }
    
}

module.exports = {createAvatarFolder}