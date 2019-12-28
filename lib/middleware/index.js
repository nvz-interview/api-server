const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

function middleware() {
    return [morgan('dev'), compression(), bodyParser.json({limit: '100mb'})];
}

module.exports = middleware;
