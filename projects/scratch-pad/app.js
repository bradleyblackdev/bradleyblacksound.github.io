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