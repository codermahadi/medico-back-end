const logger = require('winston');

export function checkError(err) {
    if (err) {
        logger.error(err);
        process.exit(1);
        throw new Error(err);
    }
}