const server = require('./server');
const host = 'localhost';
const port = '3000';

server.listen(port, host, () => {
    console.log(`서버가 http://${host}:${port} 에서 시작되었습니다`)
})