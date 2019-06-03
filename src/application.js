const http = require('http');
const path = require('path');
const fs = require('fs');
const serveStatic = require('./serve-static')

const debug = require('../utils/debug')('application');

const application = () => {

    const server = http.createServer((req, res) => {
        serveStatic(req, res);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
      
        const filePath = path.join(__dirname, '../public/index.html')
        fs.readFile(filePath, (err, data) => {
          if (err) throw err;
      
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