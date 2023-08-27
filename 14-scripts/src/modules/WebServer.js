const httpSever = require('http').Server
const fs = require('fs');
const path = require('path')

class WebServer extends httpSever {

    constructor() {
        console.log(__dirname);
        super();
        this.listen(process.env.PORT);
        this.on('request', this.reqHandler);
    }

    reqHandler (req, res) {
        console.log(path.join(__dirname, '../../static/index.html'))
        const src = fs.createReadStream(path.join(__dirname, '../../static/index.html'));
        src.pipe(res);
    }
}
exports.module = new WebServer();