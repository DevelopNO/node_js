const req = require('request');
class GoogleCaller {
    callGoogle() {
        req('https://google.com', this.requestHandler);
    }

    requestHandler(err, res, body) {
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', res && res.statusCode); //
        console.log('body:', body); 
    }
}

const googleCaller = new GoogleCaller();

module.exports =  googleCaller;
