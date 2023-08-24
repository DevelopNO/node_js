setImmediate((a, b, c) => {
    if (b) {
        console.log(c);
    } else {
        console.log(a);
    }
}, 10, 20, 22);