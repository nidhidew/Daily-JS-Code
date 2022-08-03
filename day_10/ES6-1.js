/**
Compare Scopes of the var and let Keywords

Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to 
use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a 
function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
 */

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
 
/**Mutate an Array Declared with const */

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
   console.log(s);
  // Only change code above this line
}
editInPlace();

/**Prevent Object Mutation */
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
//To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.    
  Object.freeze(MATH_CONSTANTS);

    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

/**Use Arrow Functions to Write Concise Anonymous Functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we 
create inline functions. We don't need to name these functions because we do not reuse them anywhere else. */  

const magic = () => {
    return new Date();
};

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
console.log(myConcat([1, 2], [3, 4, 5]));

/**Set Default Parameters for Your Functions
 * 
 * 
 * Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
 */

const increment = (number, value = 1) => number + value;
console.log(5,2);
console.log(5);