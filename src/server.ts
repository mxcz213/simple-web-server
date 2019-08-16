import http from 'http';

const server = http.createServer((req, res) => {
    res.write('hello');
    res.end();
}).listen(9999);
console.log('server listen on 9999');