const fs = require('fs');

const randomStr = Math.random().toString(36).substring(7);

try {
    fs.mkdirSync(`./${randomStr}`);
    console.log(`${randomStr} created!`);
} catch {
    console.log('mkdirSync failed');
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 

async function run() {
    await delay(1000);
    try {
        fs.rmdirSync(`./${randomStr}`);
        console.log(`${randomStr}  removed.`);
    } catch {
        console.log('rmdirSync failed');
    }
    
}

run();

