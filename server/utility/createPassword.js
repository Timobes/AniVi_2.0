const bcrypt = require('bcrypt');

const dotenv = require('dotenv');
dotenv.config()

async function createPassword(pass) {
    try {
        const hash = await bcrypt.hash(pass, +process.env.SALT_ROUNDS);
        return hash;
    } catch (err) {
        console.error(err);
        throw err; 
    }
}

module.exports = { createPassword };
