const { Server } = require('http');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class MyServer extends Server {
    constructor() {
        super();
        this.listen(3000);
        this.on('request', this.requestHandler);
    }

    async requestHandler(req, res) {
        let content = await readFile('./text.txt');
        res.end(content);
    }
}

const myServer = new MyServer();