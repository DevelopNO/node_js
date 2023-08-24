const dns = require('dns');
const util = require('util');

reverse = util.promisify(dns.reverse);

async function reverseIPFrom(ip) {
    const rev = await reverse(ip);
    console.log(rev);
}
reverseIPFrom('8.8.8.8');
reverseIPFrom('8.8.4.4');
