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
    const {user} = body;

    const isNotified = await usersModel.notify(user);

    res.status(200).send({isNotified});
}

function apply(router) {
    router.get('/users(/)?', getAlUserIds);
    router.post('/users(/)?', getUsersByIds);
    router.post('/users/notify', notifyUser);
}

module.exports = apply;
