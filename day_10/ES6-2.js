//Use the Rest Parameter with Function Parameters

const sum = (...args) => {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(4,5,9)+" "+sum(7,5,3,1,4));

//Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES_1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
const {today,tomorrow} = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES_2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const { today: highToday_1,tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  console.log(highToday_1);
  console.log(highTomorrow);
  // Only change code above this line

//Use Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  const { today: {low: lowToday, high: highToday_2} } = LOCAL_FORECAST;
  console.log(LOCAL_FORECAST.today.low);
  console.log(LOCAL_FORECAST.today.high);
  // Only change code above this line

//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b 
//receives the value stored in a.  

let a = 8, b = 6;
// Only change code below this line
[a,b]=[b,a]