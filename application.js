const http = require('http');

const application = () => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello, node!')
    })

    const listen = (host, port, func) => {
        server.listen(host, port, func)
    }

    return {
        server,
        listen
    }
}

module.exports = application;