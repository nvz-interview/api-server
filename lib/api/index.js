const express = require('express');

const applyUsersRoutes = require('./users');

const router = express.Router({mergeParams: true});

applyUsersRoutes(router);

module.exports = router;
