// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for(var a = 0; a <= array.length - 1; a++) { //loop over array from index 0 to final index
    console.log(array[a]); //console log each value
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for(var b = array.length - 1; b >= 0; b--) { //loop over array from final index to first
    console.log(array[b]); //console log output
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var thisArray = [] //create an empty array
  for(var key in object) { //loop through object value/key pairs
    thisArray.push(key); //push key into the array on each loop iteration
  }
  return thisArray;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object) { //for in loop to cycle through object key/value pairs
    console.log(key); //console log keys on each iteration
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var thatArray = [] //create empty array
  for(var key in object) { //for in loop will cycle through all key/value pairs
    thatArray.push(object[key]); //this time, push in the values
  }
  return thatArray;
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) { //for in loop to cycle through an objects key/value pairs
    console.log(object[key]); //console log the values
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var num = 0 //create a variable for storing a number
  for (var key in object) { //loop over an objects key value pairs
    num++; //for each loop iteration, increment the value of the variable
  }
  return num; //return the variable
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var array = []; //create an empty array
  for (var key in object) { //create a for in loop
    array.push(object[key]); //push object values into the array
  }
  for(var a = array.length - 1; a >= 0; a--) { //before outputting this array, run it through a loop to return values from final to first
    console.log(array[a]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
