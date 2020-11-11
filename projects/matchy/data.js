/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "werewolf";
animal["name"] = "David";
animal.noises = [];
// console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises = ["howl"];
noises.push("screech");
noises.unshift("bark");
noises[noises.length] = "arf";
// console.log(noises.length);
// console.log(noises[noises.length - 1]);
// console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("awooooo");
// console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
// // console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
// // console.log(animals);
var egret = {
    species: 'egret',
    name: 'Josiah',
    noises: ['cah', 'woop'] };
var snake = {
    species: 'snake',
    name: 'Derrick',
    noises: ['hiss', 'szsz'] };
animals.push(egret);
animals.push(snake);
// console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
using data structure array,
because all values will be of same catagory
*/

var friends = []; //
function getRandom(anArr) { //function getRandom and analyzes its .length, to create a random number
    return Math.floor(Math.random()*anArr.length); //code block returns a random whole integer that is a valid index within anArray 
}
// console.log(getRandom(animals));
friends.push(animals[getRandom(animals)].name);//pushing a random animal from the animals array into friends [];
// console.log(friends);
animals[getRandom(animals)].friends = friends; //assigning the key friends of a random animal, to the friends []
// console.log(animals[getRandom(animals)]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */


// console.log(animals);
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.animexports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}