const {users: usersModel} = require('../model');

async function getAlUserIds(req, res) {
    res.status(200).send(await usersModel.getUserIds());
}

async function getUsersByIds(req, res) {
    const {body = {}} = req;
    const {ids} = body;

    const users = await usersModel.getUsersByIds(ids);

    res.status(200).send({users});
}

async function notifyUser(req, res) {
    const {body = {}} = req;
    const {users} = body;

    const notificationResults = await usersModel.notify(users);

    res.status(200).send({notificationResults});
}

function apply(router) {
    router.get('/users/ids', getAlUserIds);
    router.post('/users', getUsersByIds);
    router.post('/users/notify', notifyUser);
}

module.exports = apply;
