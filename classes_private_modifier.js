var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meter) {
        alert(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
var a = new Animal("dog").neme;
console.log(a);
