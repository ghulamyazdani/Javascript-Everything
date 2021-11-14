//function to use of the Object.prototype.toString method
function toString(obj) {
    return Object.prototype.toString.call(obj);
}
var increment = function (n) {
    return n + 1;
};  
var square = function (n) {
    return n * n;
};
var doMathSoIDontHaveTo = function (n, func) {
    return func(n);
};
doMathSoIDontHaveTo(5,square);

var increment = (n) => n+1;
var square = (n) => n*n;
var doMathSoIDontHaveTo = (n, func) => func(n);
