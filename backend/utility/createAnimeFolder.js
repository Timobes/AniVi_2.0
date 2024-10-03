const fs = require('fs')

function createAnimeFolder(name) {
    name = name.replaceAll(' ', '')

    const paths = `static/anime/${name}`

    try {
        if (!fs.existsSync(paths)){
            fs.mkdirSync(paths, {recursive: true})
            console.log(`папка ${paths} создана!`)
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = {createAnimeFolder}