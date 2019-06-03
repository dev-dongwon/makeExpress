const App = require('./src/application');
const path = require('path');
const debug = require('./utils/debug')('app');
const serveStatic = require('./middlewares/serve-static');
const fs = require('fs');
const app = App();
const logger = require('./middlewares/logger');
const errors = require('./middlewares/errors');


const index = (req, res, next) => {
    const publicPath = path.join(__dirname, './public')
  
    fs.readFile(`${publicPath}/index.html`, (err, data) => {
      if (err) throw err
  
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  };
  

app.use(logger());
app.use(serveStatic());
app.use(index);
app.use(errors.error());
app.use(errors.error404());

debug('app is initiated');
module.exports = app;