/*Operators
*Operators are the way in which we manipulate data. They fall into one or more of the following catagories:
*1. Assignment operators
*2. Comparison operators
*3. Arithmitic operators
*4. Logical operators
*5. String operators
*6. Unary operators
*7. Contional (ternary) operators
*/

//Assignment operators- assign or reassign a value
var a = 10;  // = is an assignment operator
a++; // ++ is an assignment operator that increases a value by 1
a--; // -- is an assignment operator that decreases a value by 1

//Comparison operators- these operators evaluate to a boolean value
console.log(10 < 5); // is false
console.log(10 > 5); //  is true
console.log((1 + 2) * 3 >= 9); // is true
5 === 4; //false; this is known as a strict comparison operator
5 !== 4; //true; this checks for strictly not equal
5 == "5"; // true; this is a non-strict comparison and can compare different value types
5 != "5"; // false; this checks for non=strictly not equal

//Arithmatic operators- operators we use to transform or manipulate data
console.log(1 + 1); //add operator; results in 2
console.log(5 * 5); //multiply operator; results in 25
console.log (10 % 3); //modulo operator; produces 1; this operator outputs a remainder
var c = 10;
console.log(-c); //the negation operator flips the positive/negative value of a value

//Logical operators- evaluate to a boolean
// && requires all conditions to evaluate to true, otherwise false
// || only requires one condition to evaluate to true to pass true
// ! flips from true to false, or vice versa
// !! coerces a value of true (truthiness, defined) or false (falsiness, undefined, 0)
console.log(!!5 && 10 > 5); //true
console.log(!!1 || !!0); // true
console.log(!false); // true

// String operators
// + can be used to concatenate strings
console.log("connect this string" + "with that string");
//you can also use comparison operators on strings
console.log(a > c); // evaluates to a a characters ascii decimal value; can be used to test/establish alphabetical order

// Unary operators - operators that transform a single operand
// typeof - evaluates a value to its datatype
console.log(typeof.5); //evaluates to number
// ! is the not operator
console.log(!false); //evaluates to true

// Conditional (ternary) operators
//these operators are the only ones that take 3 operands; they accept a boolean value and output a value based on the input
//condition ? trueValue : falseValue
console.log(true ? "it's true" : "it's false"); // returns true
console.log(false ? "it's true" : "it's false"); // returns false

