// how to decalre array
const arr = ["a","b","c"];
const arr2 = [4,7,8];
const arr3 = ["a","b",7,4];
// we can decalre in all of this types

//multi-dimentional array
const myArray = [["a",45],["b",7]];

//access array data with indexes
const myArr = [50, 60, 70];
const myData = myArr[0];

//modify array using index
const array = [18, 64, 99];
array[0] = 45;

//access multidimentional array value using index of arrays
const arr4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const data = arr4[2][1];

//manipulate array with push()
const arr5 = [["John", 23], ["cat", 2]];
arr5.push(["dog",3]);  

//manipulate array with pop(); it removes last element
const arr6 = [["John", 23], ["cat", 2]];
const removedFromMyLastArray=arr6.pop();

//manipulate array with shift(); it removes first element
const arr7 = [["John", 23], ["dog", 3]];
const removedFromMyFirstArray = arr7.shift();

//manipulate array with unshift(); it adds the new element
const arr8 = [["John", 23], ["dog", 3]];
const addFromMyArray = myArray.shift();
myArray.unshift(["Paul", 35]);

//1. create multidimentional array
const myList = [["asd",45],["fgh",75],["wer",12],["qaz",32],["poi",14]];