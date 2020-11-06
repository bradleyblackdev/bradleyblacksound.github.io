// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
for (var a = 1; a <=100; a++) { //use a for loop to push out values 1 - 100
    if (a % 15 === 0) { //put a if statement in the code block to return different console.log strings as required; modulo checks if a is divisible by a number
        console.log("FizzBuzz");
    } else if (a % 5 === 0) { 
        console.log("Buzz");
    } else if (a % 3 === 0) {
        console.log("Fizz");
    } else console.log(a); //for all numbers not divisible by 3, 5, or 15, simply output a
}
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}