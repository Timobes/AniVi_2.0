// Run = node run.js "name" 
// "name" - only small case!
// create = "name" Router, Controller, Service 

const { program } = require('commander');
const fs = require('fs');

const createDirectory = (name) => {
    // let name = 'tim'
    let bigName = name[0].toUpperCase() + name.substring(1)
    
    const dirs = [`../routers/${name}Router.js`, `../controllers/${name}Controller.js`, `../services/${name}Service.js`]
    const files = [`
const Router = require('express')
const ${name}Controller = require('../controllers/${name}Controller.js')
const ${name}Router = new Router()

${name}Router.get('/', ${name}Controller.name)

module.exports = ${name}Router
    `, `
const ${bigName}Service = require('../services/${bigName}Service.js')
class ${bigName}Controller {
    async name(req, res) {
        try {
            const test = ${bigName}Service.test()

            res.json({"message":"test"})
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new ${bigName}Controller`, `
class ${bigName}Service {
    async name(body) {
        try {
            const test = body

            return test
        } catch (error) {
            console.log(error) 
        }
    }
}

module.exports = new ${bigName}Service 
    `]
    
    for (let i = 0; i < files.length; i++) {
        fs.writeFileSync(
            dirs[i],
            files[i],
            'utf-8'
        )
    }
};

program
    .version('0.0.1')
    .argument('<name>', 'Name of the router directory')
    .action((name) => {
        if (!name) {
            console.error('Please provide a name for the router directory.');
            process.exit(1);
        }
        createDirectory(name);
    })
    .parse(process.argv);
