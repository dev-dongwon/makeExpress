const App = require('./src/application');
const app = App();
const debug = require('./utils/debug')('app');

debug('app is initiated');
module.exports = app;