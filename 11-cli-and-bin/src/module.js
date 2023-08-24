const fs = require('fs');
const crypto = require('crypto');

class EncryptAPI {
    constructor() {
        this.algorithm = 'aes-256-ctr';
        this.password = 'myPasswordIsTheBest';
        this.key = crypto.scryptSync(this.password, 'littleSaltWontHurt', 32);
        this.iv = 'myIvStringIsTheWorldBest'.toString('hex').slice(0, 16);
    }

    encrypt(sourceFileName) {
        const destFileName = sourceFileName + '.encrypted';
        const readStream = fs.createReadStream(sourceFileName);
        const writeStream = fs.createWriteStream(destFileName);
        const encryptStream = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        readStream.pipe(encryptStream).pipe(writeStream);
        writeStream.on('finish', this.onEnd);
    }

    decrypt(sourceFileName) {
        const destFileName = sourceFileName + '.decrypted';
        const readStream = fs.createReadStream(sourceFileName);
        const writeStream = fs.createWriteStream(destFileName);
        const encryptStream = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        readStream.pipe(encryptStream).pipe(writeStream);
        writeStream.on('finish', this.onEnd);
    }
    onEnd() {
        console.log('finished!');
    }
}

module.exports = new EncryptAPI();