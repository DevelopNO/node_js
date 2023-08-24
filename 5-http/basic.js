const { Server } = require('http');

const myServer = new Server();
myServer.listen(3000);

myServer.on('request', (request, response) => {
    response.end('hello, world!');
})