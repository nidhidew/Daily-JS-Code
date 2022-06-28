var myname; //by using var keyword creating a variable
myname = 5; // storing int value 
myname = "xyz"; //storing string value

var b;
b= myname; //asigning one variable value to another variable 

var c = 10; //asigning a value to a variable like this also


/* difference between let and var is that if we use var it can override the variable value and dosent show an
error but if you use let it will show an error or will let you use variable name only once in code*/ 
var d = "sdf";
var d = "wdf";

let e = "sdf";
let e = "wdf";

/** const is readonly variable datatype. once a value is assigned it will not changed it remain constant*/
const f = "code";

console.log(myname+" "+b+" "+c+" "+d+" "+e+" "+f);