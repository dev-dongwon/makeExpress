const App = require('./src/application');
const debug = require('./utils/debug')('app');
const serveStatic = require('./middlewares/serve-static');
const logger = require('./middlewares/logger');
const errors = require('./middlewares/errors');
const index = require('./routers/index');

const app = App();

app.use(logger());
app.use(serveStatic());
app.use('/', index());
app.use(errors.error());
app.use(errors.error404());

debug('app is initiated');
module.exports = app;