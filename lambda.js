var _this = this;
var add = function (x, y) {
    return x + y;
};
var add = function (a, b) {
    return a + b;
};
var add1 = function (x, y) { return (x + y); };
//output var add1 = function(x, y){return x + y};
var myFunction = function (f) { _this.x = "x"; }; //automatically creating the that-equals-this pattern
