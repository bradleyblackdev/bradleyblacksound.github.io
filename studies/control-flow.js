/* Control Flow

Control flow is achieved by conditional statements.
Input data is analyzed, and if a specific condition is met (found to be true),
a corresponding action occurs.

*/


//1. If
//If expressions take the following form:
//if (some condition in parentheses is found to be true) {
    // a block of code in curly braces is executed
    // }
if (5 > 4) {
    console.log(true); //logs true
}

var mood = "pretty, pretty, good";
if (mood !== "ehh") {
    mood = mood.split(", ")
}
console.log(mood); //logs the value of mood


//2. Else-if
//A way to check for additional conditions following an if statement
//As soon as a condition is satisfied, no further conditions are checked
var space = Infinity
if (space < "earth") {
    console.log("big")
} else if (space < "the galaxy") {
    console.log("bigger")
} else if (space < "the known universe") {
    console.log("bigger still");
} else if (space === Infinity) {
    console.log("That's correct") //this is the value that will be logged
}  else if (space === Infinity) {
      console.log("conclusion already reached")
}



//3. Else
//An else statement does not check for truthiness of a condition
//It acts as the final statement in an if else if chain when no other conditions are satisfied
if (1 === 2) {
    console.log(true);
} if (1 > 2) {
    console.log(true);
} if (2 !== 2) {
    console.log(true);
} else {console.log("no idea")}; //this value will be logged
