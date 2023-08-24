const { Server } = require("http");

class MyServer extends Server {
    constructor() {
        super();
        this.listen(3000);
        this.on('connection', this.connectionHandler);
        this.on('request', this.requestHandler);
    }

    connectionHandler() {
        console.log('connection established!');
    }

    requestHandler(req, res) {
        res.end('hello, this is connection!');
    }
}

const myServer = new MyServer();
