const {ERROR} = require('./types');

class UserError extends Error {
    constructor() {
        super();
        this.type = ERROR;
    }
}

module.exports = {
    UserError
};
