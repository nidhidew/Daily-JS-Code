/**Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
 * you access the data in objects through what are called properties. */

 const myDog = {
  name: "xyz",
  tails: 1,
  legs: 4,
  friends: [5]
  
  };
  console.log(myDog);

  //accessing object properties with dot notation
  // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  const hatValue = testObj.hat;      
  const shirtValue = testObj.shirt;   

/**accessing object properties with bractes notation */ 

const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  const entreeValue = testObj2["an entree"];   // Change this line
  const drinkValue = testObj2["the drink"];    // Change this line 
//accessing object properties with variables
// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj3[playerNumber];   // Change this line  

  //updating object notation
  // Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog2.name = "Happy Coder";

//add a new properties in object
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog3.bark = "woof";  

//delete properties in object
// Setup
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog4.tails;  

//using objects for lookups
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  24:"C",
  25:"B",
  26:"A"
};

// const thirdLetter = alpha[2];
// const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];  
console.log(valueLookup+" valuelookup");

//another example
function phoneticLookup(val) {
  let result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
  }
  result = lookup[val];
  return result;
}

//testing objects for properties
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  else{
    return "Not Found";  }
}

//manuplating complex objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "kumar sanu",
    "title": "pehla pyar",
    "release_year": 2001,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
  }
];

// accessing nested objects
/**Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents 
 * variable.  */
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"] ;


//accessing nested arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];