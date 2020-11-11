/*
Datatypes 

Javascript accepts many different datatypes.

There are two types of datatypes
1.simple (or primitive)
2.complex

Simple- these are atomic, immutable values. and Include the following data types
    -Number
    -Boolean
    -String
    -Null
    -Undefined
    -NaN (Not a Number)
    -Infinity (and -Infinity)
    
Complex- these data types actually aggregate other complex or simple values, and are not the values themselves
    -Function
    -Object
    -Array
    
Importantly, simple values require a fixed, and finite amount of memory.
This allows them to be stored directly where they are assigned.
On the contrary, complex data types reference data that is stored elsewhere

Here are some of data types available in Javascript
*/

// 1. Number
//any number, positive or negative, whole or fractional
//1, 2400, -5, 1.6, etc
var myNum = 9
console.log("my number is " + myNum); //console logs the concatenated string


//2. String
//strings are textual bits of data
//can be enclosed in: single quotes, double quotes, backticks, and in some instances no quotes
console.log('the single quote string');
console.log("double quotes for this string");
console.log(`backticks allow for tricks i haven't learned yet`);
var aArr = {thisKeyIsASpacelessStringAndRequiresNoQuotes: "though this value, and all values, requires quotes"}
console.log(aArr); //console logs the value of aArr


//3. Boolean
//booleans are true or false
//can also be thought of as truthiness or falsiness
//if something exists, that's a characteristic of truthiness
//ex: 5, -5, "this string"
//if something does not exist, that's falsiness
//ex: 0, undefined
//booleans are often used for control flow. for example:
var truthiness //let's leave it undefined
if (truthiness === true) { //it's not
    console.log("code block a is activated") }
        else console.log("code block b is activated");//and so, we execute this block


//4.Array
//arrays are objects that store indexed values
//the array literal is a []
var arrayActivate = [];
//values within are indexed like so:
var indexArr = ["ahem", 77, [], false]
//              0       1   2   3       etc...
//note: arrays can store many different dataypes in a single array!
//you can access data stored inside by referencing its index #


//5.Object
//technically javascript is nothing but objects
//but here we specifically mean an object literal
var beholdObj = {} //curly braces
//these curly braces are designated for storing key:value pairs
beholdObj = {key1: "value1", key2: "value2"} //note the colon, and commas
//unlike arrays these are not indexed, keys and values are relevant to one another
var shoePref = {color: "white", lowMidorHigh: "Mid", size: 10.5}
//like arrays, objects can also store different datatypes
console.log(shoePref);


//6.Function
//functions are scoped bits of code that can be reused
//functions are written to allow for an input parameter, tho not required
//the function body is a code block enclosed in {}
//the {} typically include a return statement; otherwise the function will return undefined
function noParamFunction() {};//parameters would go in ()
function yesParamFunction(param1) {
    param1 = param1.toLowerCase();
    return ("a string that culminates in " + param1)
}
//for a function to execute you have to call it, like so:
console.log(yesParamFunction("FAKE NEWS"));
//             function name(argument);

//7. undefined
//undefined is the data type when none other has been initiated
var y //as var y is declared, but undefined, its value is undefined
console.log(y);

//8. null
//null is a nullified value. It must be written
var nullify = null;
console.log(nullify);


//9. NaN
//Not a Number. This datatype is non-configurable and non-writeable

//10. Infinity and -Infinity
//Infinity is a numerical value that represents infinity. And specifically positive infinity. -Infinity is its inverse
if (99999999 < Infinity) {
    console.log("Nice try");
}
if (-9 * 9 * 9 * 9 * 9 * 9 > -Infinity) {
    console.log("Gonna need a bigger number");
}