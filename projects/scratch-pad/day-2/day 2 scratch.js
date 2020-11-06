#!/usr/bin/env node

'use strict';

var greeting = 'Welcome to Operation Spark';
console.log(greeting);

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();
    if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne === stringTwo) {
        return 0;
    } else return -1;
    
}

console.log(sortAscending("fifth", "fiath"));


for (var index = 0; index <= 5; index++) {
    console.log(index);
}

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
for (var a = 1; a <=100; a++) {
    if (a % 15 === 0) {
        console.log("FizzBuzz");
    } else if (a % 5 === 0) {
        console.log("Buzz");
    } else if (a % 3 === 0) {
        console.log("Fizz");
    } else console.log(a);
}
}
fizzBuzz();