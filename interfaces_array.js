//We can use interfaces to describe an array also, please note this is different from Java or C# 
//where we can only use interfaces to describe class types.
var myArray = ["Bob", "Fred"];
var first = myArray[0];
var myDictionary = { "first": "Bob", "second": "Fred" };
var first = myDictionary["first"];
var myDictionary2 = { "first": "Bob", "second": "Fred" }; // Will not work, property length is required
var myDictionary3 = { "first": "Bob", "second": "Fred", length: "2" }; // Will work, length property is defined but not much usefull 
var first = myDictionary3["first"];
