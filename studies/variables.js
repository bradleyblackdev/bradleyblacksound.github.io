/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*
Var, let, const
These are three types of variables used in Javascript, and each has unique properties

Hoisting is when javascript scans an entire program of code, and,
depending on the variable or data type, "hoists" it to the top of its scope.
In some instances, this allows variables to be used before the code line on which they are initialized or defined

Var:
-can be reassigned
-hoisted to top of scope
-scoped to functions
-not scoped to if or loop blocks

Let:
-can be reassigned
-not hoisted. only can be accessed or referenced after declaration
-scoped to functions, if, and loop blocks

Const:
-CANNOT be reassigned //however, when assigned to complex objects, the objects can be changed
-not hoised
-scoped to functions, if, and loop blocks

*/

//console.log(theVar, the Const, theLet) //only theVar is hoisted and can be referenced here; other 2 cause reference error
var theVar;
const theConst = 0;
let theLet;
console.log(theVar, theConst, theLet); //all three can be logged
// theConst = 1; //running this code will produce a type error