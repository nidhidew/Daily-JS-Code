const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
console.log(myStr);
//Output:-  <a href="http://www.example.com" target="_blank">Link</a>

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);
//Output:-  <a href="http://www.example.com" target="_blank">Link</a>


const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);
/**Output:-
 * FirstLine
 *      \SecondLine
 * ThirdLine
 */

//length of string
// Setup
let lastNameLength = 0;
const last = "Lovelace";

// Only change code below this line
lastNameLength = last.length;

//find the first character of string
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


/**Use Bracket Notation to Find the Last Character in a String */
// Setup
const lname = "Lovelace";

// Only change code below this line
const lastLetter = lname[lname.length-1]; // Change this line
console.log(lastLetter);