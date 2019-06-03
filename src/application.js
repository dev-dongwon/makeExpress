const http = require('http');
const path = require('path');
const fs = require('fs');
const serveStatic = require('../middlewares/serve-static');
const Middleware = require('./middleware');

const debug = require('../utils/debug')('application');

const application = () => {

    const middleware = Middleware();

    const server = http.createServer((req, res) => {
        middleware.run(req, res);
    });

    const use = (path, func) => {

        if (typeof path === 'string' && typeof func === 'function') {
            func.path = path;
        } else if (typeof path == 'function') {
            func = path;
        } else {
            throw Error('Usage: use(path, fn) or use(fn)');
        }

        middleware.add(func);
    }

    const listen = (host, port, func) => {
        server.listen(host, port, func);
        debug('server is now listening');
    }

    return {
        server,
        listen,
        use,
    }
}

module.exports = application;