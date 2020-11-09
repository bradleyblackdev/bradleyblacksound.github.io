/* Functions
Functions are blocks of code that can be reused
They look like this: */
function nameTheFunction(nameAParameter, nameAnotherParameter) {
    //execute code block in curly braces
    //return statement dictates what data exits the function. if no return statement exists, the function returns undefined
    return nameAParameter + nameAnotherParameter //this will return the 2 parameters concatenated
}
//The parameters in parentheses are the inputs for the function. They are placeholders for the arguments that will be used when the function is called.
//Functions must be declared, and will later be called, except for anonymous functions which are usually declared and called within the context of a larger function

// Three types of functions:
// 1. Named: the keyword "function" followed by the function name and arguments
function namedFunction() {
    return "You have called the named function"} //returns this string

// 2. Anonymous: function(argument); these are usually found within larger functions
var repeats = 5 
function iHeardYouLikeFunctions(so) { //we will use so as our parameter here, and later use a function as our argument in its place
    console.log("I put a function" + so()) //here we use so() to CALL the function we intend to use as our argument
}
iHeardYouLikeFunctions(function() { //here is our anonymous function
    var arr = [];
    for (var a = 0; a <= repeats; a++) {
        arr.push(" inside a function")
    }
    arr = arr.join("");
    return arr; //our return statement will be the value stored in the variable arr;
}
)
// 3. Assigned (function expression): use anonymous function syntax but stores the function inside a variable
var val = 3
var anon = function(val) {return "this expression function states that val is" + val};


//Functions must be called to be executed
namedFunction(); //this function takes no parameters; regardless the () is required for it be called
console.log(namedFunction); //not called but referenced 
console.log(namedFunction()); //called

//When called, we replace the parameters with arguments
console.log(nameTheFunction("Our first argument", "Out second argument"));

