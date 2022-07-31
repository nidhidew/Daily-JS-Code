//Use Recursion to Create a Countdown

/**say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing 
 * the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. */
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)+"countup");


/**We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on
 *  the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should
 *  return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */  

function countdown(n){
    if(n<1){
        return [];
    }
    else{
        const arr = countdown(n-1);
        arr.unshift(n);
        return arr;
    }
}
console.log(countdown(5)+"countdown")

//The unshift() method adds new elements to the beginning of an array.

/**We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the 
 * startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your 
 * function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */

function rangeOfNumbers(startNum,endNum){
    if(endNum-startNum===0){
        return [startNum];
    }
    else{
        var numbers = rangeOfNumbers(startNum,endNum-1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log()