/* Loops

Loops allow us to sift through complex data in an organized and efficient
They are a structure that allows us to "loop over" data
*/

//for loops
var boolArray = [true, true, false, false, false, true, true];
//for this array we want to tally the number of trues and falses
var boolTrue = 0; //initialize the variables to store our count
var boolFalse = 0;
//to loop over an array, we use the for method

//the first part of a loop is a statement in ()
//for (initial condition; final condition; operation that brings us from initial to final)
// for arrays, we can create a loop that will iterate over its indexes
for (var a = 0; a <= boolArray.length - 1; a++) {
// now we use {} for a code block that is executed on each iteration
if (boolArray[a] === true) {
    boolTrue++;
} else {boolFalse++}
}
console.log(boolTrue, boolFalse);


//to reverse course and loop backwards, the following format works:
//for (var b = boolArray.length - 1; b >= 0; b--)

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
    console.log(ourObj[key]) //this will log the values. note the brackets, as the results stored in key are arrayed
}


//for of loops use this same syntax, but are used for arrays
for(var element of boolArray) {
console.log(element);
}

//while loops work with the following syntax
var z = 30
while(/*condition*/ z > 20) {
    //run the following code block
    console.log(z)
    //operation that brings us toward condition; otherwise we loop infinitely
    z--
}

