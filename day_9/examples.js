/**
 * Use "Math.random()" to generate a random decimal.
 * "Math.floor()" to round the number down to its nearest whole number.
 */


//Generate Random Fractions with JavaScript
let result = 0;
function randomFraction() {
  while(result===0){
    result = Math.random();
  }
    return result;

}
  randomFraction();
  console.log(result+"result");


//Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random()*20);
var result2;
function randomWholeNum(){
   result2 = Math.floor(Math.random() * 10);
}

randomWholeNum();
console.log(result2+"result2")


//Generate Random Whole Numbers within a Range
var result3;
function randomRange(myMin, myMax) {
    result3 = Math.floor(Math.random()*(myMax-myMin+1)+myMin);
}
randomRange(9,20);
console.log(result3+"result3")


//Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}
    
convertToInteger("56");

//Use the parseInt Function with a Radix    
function convertToInteger(str) {
    return parseInt(str,2)
}
    
convertToInteger("10011");

//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
checkSign(10);
