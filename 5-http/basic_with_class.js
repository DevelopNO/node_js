const { Server } = require("http");

class MyServer extends Server {
    constructor() {
        super();
        this.listen(3000);
        this.on('request', this.requestHandler);
    }

    requestHandler(req, res) {
        res.end('hello, world!');
    }
}

const myServer = new MyServer();