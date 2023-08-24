// Installed eslint and xo both locally using 
// npm i xo
// npm i eslint
// and globally, using
// npm i xo -g
// npm i eslint -g

console.log('hello');

class By {
    x: number
    y: number
    z: number
    constructor(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
    }

    print() {
        console.log(this.x + this.y + this.z);
    }
}

const bye = new By(1,2,3);
bye.print();
