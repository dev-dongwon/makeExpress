const http = require('http');
const Middleware = require('./middleware');
const Response = require('./resonse');
const Request = require('./Request');
const debug = require('../utils/debug')('application');

const application = () => {
    const middleware = Middleware();

    const server = http.createServer((req, res) => {
        middleware.run(Request(req), Response(res));
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

    const get = (path, func) => {
        if (!path || !func) throw Error('path and fn is required')
        func.method = 'get';
        use(path, func);
    }

    const post = (path, func) => {
        if (!path || !func) throw Error('path and fn is required')
        func.method = 'post';
        use(path, func);
    }

    const listen = (host, port, func) => {
        server.listen(host, port, func);
        debug('server is now listening');
    }

    return {
        server,
        listen,
        use,
        get,
        post,
    }
}

module.exports = application;