/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(inputArr, inputStr) { //function search takes a string and an array; looks for the string value in array
    var nope = null; //this var is defaulted to null, it will be reassigned if the if condition is satisfied
    for(var i = 0; i <= inputArr.length -1; i++) { //for loop to hit array indexes
        if (inputStr === inputArr[i].name) { //check for a strictly equal condition
        nope = inputArr[i]; //if one is found, then nope is reassigned to the value
        }
} return nope; //the function returns the value stored in variable nope
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(inputArr, inputStr, replObj) { //function replace searches for a string in an array, and, accordingly, 
    for(var i = 0; i <= inputArr.length - 1; i++) { //for loop to hit array indexes
        if (inputStr === inputArr[i].name) { //check for a value match
            inputArr[i] = replObj; //if match found redefine the object at index i as replObj
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(inputArr, inputStr) { //function remove takes a string and an array; if the string already exists in the array, it is removed
    for(var i = 0; i <= inputArr.length - 1; i++) { //for loop to cycle thru array indexes
        if (inputStr === inputArr[i].name) { //check for name match
            inputArr.splice(i, 1); // if match exists removev the object, and its index, 
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// add v1
// function add(inputArr, newObj) {
//     var truth = []; //need an array for pushing in values
//     for(var i = 0; i <= inputArr.length - 1; i++) { //for loop to hit all indexes of array
//         if(newObj.name.length > 0 && //condition check
//         newObj.species.length > 0 &&
//         newObj.name !== inputArr[i].name) {
//             truth.push("true"); //if all conditions pass push true into the truth array
//         } else {truth.push("false")} //if not push false into the truth array
//     }if (truth.includes("false") === false) { //use this method to see if the array includes a false value
//         inputArr.push(newObj)} //if if statement returns true, push the object into the array
// }

//add v2
function add(inputArr, newObj) { //function add takes an array and an object to be/not to be added to the array
    var flipTrue = true; //use this variable as an "off" switch in case we don't want to add the object
    for(var i = 0; i <= inputArr.length - 1; i++) { //loop through the array indexes
        if(newObj.name.length > 0 && // check these conditions
        newObj.species.length > 0 &&
        newObj.name !== inputArr[i].name) { //if conditions pass, nthere's no codeblock to run, and the switch stays on
        } else flipTrue = false; //if condition check fails, the switch turns off, and stays off
    } if (flipTrue === true) {inputArr.push(newObj)} // but if the switch made it thru those indexes without getting switched off, then the object can be pushed into the array
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
