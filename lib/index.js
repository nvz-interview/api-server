const express = require('express');

const Logger = require('./utils/logger');
const middleware = require('./middleware/');
const router = require('./api/');

const app = express();

const PORT = process.argv.slice(-1)[0];

app.use(middleware());
app.use(router);

app.listen(PORT, err => {
    if (!err) {
        Logger.info(`Listening on port ${PORT}`);
    } else {
        Logger.error(err);
    }
});
