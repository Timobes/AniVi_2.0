const fs = require('fs')

function createAnimeFolder(name) {
    name = name.replaceAll(' ', '')

    const paths = [`static/anime/${name}`, `static/anime/${name}/anime_moments`, `static/anime/${name}/anime_poster`]

    try {
        for (let i = 0; i < paths.length; i++) {
            if (!fs.existsSync(paths[i])){
                fs.mkdirSync(paths[i], {recursive: true})
                console.log(`папка ${paths[i]} создана!`)
            }
        }
        
    } catch (err) {
        console.error(err)
    }
}

module.exports = {createAnimeFolder}