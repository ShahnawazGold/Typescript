function add(x, y) {
    return x + y;
}
//////////////////Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
/////////////////Anonymous function with explict type
var myAdd1 = function (x, y) {
    //Anonymous function with explict type
    return x + y;
};
//////////type names dont matter
var myAdd3 = function (x, y) {
    //type names dont matter
    return x + y;
};
var myAdd4 = function (x, y) { return x + y; }; // lambda function
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
