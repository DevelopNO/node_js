const crypto = require('crypto');
const genKey = util.promisify(crypto.generateKey)

async function createKey() {
    try {
        let _, key = await genKey('hmac', { length: 64 });
        console.log(key.export().toString('hex'));    
    } catch(e) {
        console.log(`error: ${e}`)
    }
}
createKey()