//String manipulation

//Operators - operators can be used on strings, same as number values
console.log("add this string " + "to that string"); //+ operator concatenates these strings;
console.log("alphabet" < "order") // < used to establish alphanumeric order

//Methods- methods are built in commands for modifiying or assessing data
var myString = "Barbecue";
console.log(myString.split("a"))// split method removes the value in () and creates 2 new strings
console.log(myString.slice(3, 5)); //slice takes a start and end index as bookends of a new string
console.log(myString.toUpperCase()); //converts string to all uppercase characters
console.log(myString.toLowerCase()); //converts string to all lowercase characters
console.log(myString.concat(" Chicken")); //concatenates a new string by combining w/ string in ();
console.log(myString.charAt(0)); //returns character stored at index in ();