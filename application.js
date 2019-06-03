const http = require('http');
const path = require('path');
const fs = require('fs');
const debug = require('./utils/debug')('application');

const application = () => {
    const server = http.createServer((req, res) => {

        const filePath = path.join(__dirname, '/public/index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;

            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html') 
            res.end(data);
        })
    });

    const listen = (host, port, func) => {
        server.listen(host, port, func);
        debug('server is now listening');
    }

    return {
        server,
        listen
    }
}

module.exports = application;