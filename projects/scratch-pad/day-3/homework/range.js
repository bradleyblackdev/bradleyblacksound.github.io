// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) { //function range will accept two arguments
    var intArray = [] //create an empty array
    // YOUR CODE GOES BELOW HERE //
    if (start <= end) { //compare values start and end
        for (var a = start; a <= end; a++) { //for loop set to cycle thorugh all numbers between and including start and end
            intArray.push(a); //push method to add each number on each iteration of loop to the array
        } return intArray; 
    } else {for (var a = start; a >= end; a--) { //alternative loop that similarly runs through all numbers between and including start and end
            intArray.push(a); //push method to add each number on each iteration of loop to the array
    } return intArray;
    }
    

    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
