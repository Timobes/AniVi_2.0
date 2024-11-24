function sendRes(res, code, send) {
    let mes = ''

    switch (code) {
        case 404:
            mes = 'Нет данных'
            break;
    
        case 303:
            mes = 'Невалидные данные'
            break;

        case 200:
            mes = send
            break;

        default:
            mes = 'Ошибка!'
            break;
    }


    return res.status(code).json({ message: mes })
}

module.exports = { sendRes }
