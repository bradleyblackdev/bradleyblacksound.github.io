/* Loops
*
*Loops allow us to sift through complex data in an organized and efficient manner
*They are a structure that allows us to repeat a process many times
*/

//For loops
var boolArray = [true, true, false, false, false, true, true];
//for this array we want to tally the number of trues and falses
var boolTrue = 0; //initialize the variables to store our count
var boolFalse = 0;

//for arrays, we can create a loop that will iterate over its indexes
//the first part of a loop is a statement in ()
//for(initial condition; final condition; operation that brings us from initial to final)
for (var a = 0; a <= boolArray.length - 1; a++) {
// now we use {} for a code block that is executed on each iteration
if (boolArray[a] === true) {
    boolTrue++;
} else {boolFalse++}
}
console.log(boolTrue, boolFalse); //will return the tallies of true and false values in their respective variables


//to reverse course and loop backwards, the following format works:
for(var b = 10; b >= 0; b--) {
    console.log(b); //outputs the values 10 - 1 in decending order
}

//for in loops
//for in loops are the go-to for objects
var ourObj = {
    color: "red",
    number: 9,
    ourArray: [1, 2, 3, 4]
}
//since objects aren't indexed, we use the in command to look into an objects contents
//for(var key in obj)
//declare the variable key(or any variable); obj is placeholder for object name to be looped
for(var key in ourObj) {
    //again, {} will contain our code block to execute on each iteration
    console.log(key); //this will log the key names
    console.log(ourObj[key]) //this will log the values. note the brackets;
}


//for of loops use this same syntax, but are used for arrays
for(var element of boolArray) {
console.log(element); //outputs all values stored in boolArray
}

//while loops offer the same functionality as for loops but a different structure:
var z = 30
while(z > 20) { //condition that ends loop cycle in ()
    console.log(z) //run the code block in {}
    z-- // operation that brings us closer to end condition;
}
//outputs 30 - 21 in descending order
