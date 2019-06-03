const app = require('./app');
const debug = require('./utils/debug')('bin');

const host = 'localhost';
const port = '3000';

app.listen(port, host, () => {
    debug(`서버가 http://${host}:${port} 에서 시작되었습니다`)
})