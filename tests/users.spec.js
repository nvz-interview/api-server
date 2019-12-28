const {users: usersModel} = require('../lib/model');

describe('Requesting users', () => {
    describe('without special parameters', () => {
        test('returns all successful results', async () => {
            const users = await usersModel.getAllUsers();

            const counts = users.reduce(
                (aggr, user) => {
                    if (user == 1) return aggr;
                },
                {succes: 0, error: 0, timeout: 0}
            );
        });
    });
});
