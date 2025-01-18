const bcrypt = require('bcrypt');
const logger = require("../logging/logger")

async function readPassword(pass, resHash) {
    try {
        const res = await bcrypt.compare(pass, resHash);
        return res
    } catch (err) {
        logger.error('Error comparing password:', err);
    }
}

module.exports = {readPassword}