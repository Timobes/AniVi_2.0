
class LastEpService {
    async name(body) {
        try {
            const test = body

            return test
        } catch (error) {
            logger.error(error) 
        }
    }
}

module.exports = new LastEpService 
    