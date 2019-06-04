const App = require('./src/application');
const debug = require('./utils/debug')('app');
const serveStatic = require('./middlewares/serve-static');
const logger = require('./middlewares/logger');
const errors = require('./middlewares/errors');
const index = require('./routers/index');
const login = require('./routers/login');
const bodyParser = require('./middlewares/body-parser');
const app = App();

app.use(logger());
app.use(bodyParser());
app.use(serveStatic());
app.get('/', index());
app.post('/login', login());
app.use(errors.error());
app.use(errors.error404());

debug('app is initiated');
module.exports = app;