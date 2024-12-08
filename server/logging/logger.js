const winston = require('winston')

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    transports: [
        new winston.transports.File({filename: 'logging/logs/error.log', level: 'error'}),
        new winston.transports.File({filename: 'logging/logs/all.log'})
    ]
})

// Code run logging in console
logger.add(new winston.transports.Console({format: winston.format.simple()}))

module.exports = logger