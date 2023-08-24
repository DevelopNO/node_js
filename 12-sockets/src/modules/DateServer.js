const netServer = require('net').Server;

class DateServer extends netServer {
    constructor() {
        super();
        this.listen('6969');
        this.on('connection', this.connectionHandler);
    }

    connectionHandler(socket) {
        console.log(`Someone connected! ${socket.remoteAddress}`);
        this.socket = socket;
        this.socket.on('data', this.dataHandler);
        setInterval(()=>{
            this.socket.write( `${new Date().toLocaleString()}\n`);
        }, 1000)

    }

    dataHandler(typedData) {
        console.log(`Typed This ${typedData}`)
    }
}

module.exports = new DateServer();