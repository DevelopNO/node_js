// Installed eslint and xo both locally using 
// npm i xo
// npm i eslint
// and globally, using
// npm i xo -g
// npm i eslint -g
console.log('hello');
var By = /** @class */ (function () {
    function By(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
    By.prototype.print = function () {
        console.log(this.x + this.y + this.z);
    };
    return By;
}());
var bye = new By(1, 2, 3);
bye.print();
