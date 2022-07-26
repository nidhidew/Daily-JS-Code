//The first type of loop we will learn is called a while loop because it runs while a specified condition is
// true and stops once that condition is no longer true.

const myArray1 = [];

let i=5;
while(i>=0){
myArray1.push(i);
i--;
console.log(i+" arr1");
}

//iterate with js FOR Loops
const myArray2 = [];

// Only change code below this line
for (let k=1;k<6;k++){
  myArray2.push(k);
  console.log(k+" arr2");
}

//iterate odd number with a for loop
const myArray3 = [];

// Only change code below this line
for(let l=1;l<10;l+=2){
  myArray3.push(l);
  console.log(l+" arr3");
}

// Count Backwards With a For Loop
const myArray4 = [];

// Only change code below this line
for(let j = 9; j>0;j-=2){
  myArray4.push(j);
  console.log(j+" arr4");
}

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
var total=0;
// Only change code below this line
for(let i =0;i<myArr.length;i++){ 
  total+=myArr[i];
}
console.log(total+" total")