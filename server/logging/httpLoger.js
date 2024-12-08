const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const position = fs.createWriteStream(path.join(__dirname + '/logs', 'http.log'), {flags: "a"})

const httpLogger = morgan(':method :url :status :response-time ms :date[clf] | :user-agent | :req[cookie]', {stream: position})

module.exports = httpLogger