//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, c,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log("arr "+arr);
console.log("source "+source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  const half = ({ max, min }) => (max + min)/2.0;
  console.log("half "+half);

//Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    "use strict";
    const failureItems = [];
    for(let i=0;i<arr.length;i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    console.log( failureItems);
  }
  
const failuresList = makeList(result.failure);
const successList = makeList(result.success);
const skippedList = makeList(result.skipped);

//Write Concise Object Literal Declarations Using Object Property Shorthand

// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//       name: name,
//       age: age,
//       gender: gender
//     };
//     // Only change code above this line
//   };
const createPerson = (name, age, gender) => ({
  
    name,
    age,
    gender
  
});