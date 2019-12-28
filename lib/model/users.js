const casual = require('casual');

const {arrayOf} = require('./utils');
const {UserError} = require('./errors');

const DEFAULT_USETS_PAGE_SIZE = 10;

casual.define('user', function(id) {
    return {
        id,
        firstname: casual.first_name,
        lastname: casual.last_name,
        email: casual.email
    };
});

async function getUserIds() {
    return arrayOf(casual.integer(1, 20), () => casual.uuid);
}

async function getUsersByIds(ids = []) {
    return ids.slice(0, DEFAULT_USETS_PAGE_SIZE).map(id => {
        let user;

        switch (id.charAt(0)) {
            case '1':
                user = new UserError();
                break;
            default:
                user = casual.user(id);
        }

        return user;
    });
}

async function notify({id}) {
    return id.charAt(0) === '3' ? false : true;
}

module.exports = {
    getUserIds,
    getUsersByIds,
    notify
};
