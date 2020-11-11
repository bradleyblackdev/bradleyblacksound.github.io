// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) { //return an anonymous function will take the parameter value
        if (value > base) { //determine truthiness
            return true;
        } else { //else output for falsiness
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(y) { //create a function with the parameter y to determine which value to return
       if (y < base) { //compare values to determine truthiness
           return true;
       } else return false; //output false if false
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) { 
    // YOUR CODE BELOW HERE //
    startsWith = startsWith.toLowerCase() //convert argument to lowercase to account for edge cases
    return function(string) { //return an anonymous function with parameter string
        string = string.toLowerCase() //convert string argument to lowercase to account for edge cases
        if (string[0] === startsWith) { //test for match
            return true;
        } else return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    endsWith = endsWith.toLowerCase(); //use lower case method to account for edge cases
    return function(string) { //anonymous function string will accept a string parameter
        string = string.toLowerCase(); //lower case method to account for edge cases
        if (string[string.length - 1] === endsWith) { //if condition checks for a match
            return true;
        } else return false;
        
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // i need an array to store values from my loop
    var modArray = [];
    // introduce a for loop that hits every index
    for (var a = 0; a <= strings.length - 1; a++) {
        //push the return of the function when executed on each indexed string into the array
            modArray.push(modify(strings[a]))
            //now retuern the array 
        } return modArray;

/* alternative from class doesn't require creation of an array
    use code block strings[i] = modify(strings[i]) //simply replace each indexed value to the function-modified value
*/

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//return strings.every(test); //every method evaluates all elements of an array to see if they satisfy a given function
var flipTru = true;
for (var i = 0; i <= strings.length - 1; i++) {
    if(test(strings[i]) === false) {
        flipTru = false;
    }
}
return flipTru;
        

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}