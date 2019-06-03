const app = require('./app');
const host = 'localhost';
const port = '3000';

app.listen(port, host, () => {
    console.log(`서버가 http://${host}:${port} 에서 시작되었습니다`)
})