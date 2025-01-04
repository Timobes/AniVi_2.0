const fs = require('fs')
const path = require('path')

function createAvatarFolder(name) {
    const paths = `static/users/${name}`
    // const filePaths = `static/files/avatar.jpeg`

    // const destinationFile = path.join(paths, 'avatar.jpeg');

    try {
        if (!fs.existsSync(paths)){
            fs.mkdirSync(paths, {recursive: true})

            // fs.copyFile(filePaths, destinationFile, (err) => {
            //     if (err) {
            //         console.error('Ошибка при копировании файла:', err);
            //     } else {
            //         console.log('Файл успешно скопирован!');
            //     }
            // });
        }
        
    } catch (err) {
        console.error(err)
    }
    
}

module.exports = {createAvatarFolder}