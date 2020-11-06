// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){ //function add contact will accept a contact object as argument
            contacts.push(contact)//push the contact object into the contacts array
        },
        findContact: function(fullName) { //function will take in input called fullName
            var splitName = fullName.split(" "); //fullName must be split into relatable nameFirst and nameLast strings
            for(var y = 0; y <= contacts.length - 1; y++) { //for loop to cycle thru all objects stored in contacts array
                if (splitName[0] === contacts[y].nameFirst && splitName[1] === contacts[y].nameLast) { //conditional check for exact match of first name last name
                    return contacts[y]; //if true return that contact
                }
            }
           },                //id, nameFirst, nameLast
        removeContact: function(contact) { //function will remove a given contact object from array contacts
            for (var e = 0; e <= contacts.length - 1; e++) { //loop to cycle through all stored contacts
                if (contact.id === contacts[e].id && contact.nameFirst === contacts[e].nameFirst && contact.nameLast === contacts[e].nameLast) { //if conditional checking for match at each index
                    contacts.splice(e, 1); //execute code to remove the contact with the splice method
                }
            }
        },
        printAllContactNames: function() { //set up a function to return the list of contact names in a formatted string
            var nameList = []; //create an empty array for pushing in all name values
            for(var f = 0; f <= contacts.length - 1; f++) { //use a for in loop to cycle thru all stored contacts
            nameList.push(contacts[f].nameFirst + " " + contacts[f].nameLast) //for each loop push in a contacts first and last name
            } return nameList.join("\n"); //return the array as a string with a line-break between each
        }

};




// YOUR CODE GOES ABOVE HERE //

}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
