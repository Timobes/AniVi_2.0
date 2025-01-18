const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        body('username')
            .isString()
            .withMessage('Имя пользователя должно быть строкой')
            .isLength({ min: 3 })
            .withMessage('Имя пользователя должно содержать минимум 3 символа'),
        // body('email')
        //     .isEmail()
        //     .withMessage('Введите корректный email'),
        body('pass')
            .isLength({ min: 8 })
            .withMessage('Пароль должен содержать минимум 8 символов')
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        const formattedErrors = errors.array().map(error => ({
            message: error.msg
        }));

        return res.status(400).json(formattedErrors);
    }
    next();
};

module.exports = {
    userValidationRules,
    validate
};
