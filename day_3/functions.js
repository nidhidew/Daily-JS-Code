//declaring and calling function
function reusableFunction()
{
  console.log("Hi World");
}
reusableFunction();

//passing values to functions with arguments
function functionWithArgs(a,b)
{
  console.log(a+b);
}
functionWithArgs(4,7);

//return a value from a function with return
function functionWithArgs(a,b)
{
  console.log(a+b);
}
functionWithArgs(4,7);

/**GLOBAL SCOPE AND FUNCTIONS */
// Declare the myGlobal variable below this line

let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
    // Only change code below this line
  let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//Global vs Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";
  return outerWear;
}

myOutfit();  

//understanding undefined value returned from a function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();