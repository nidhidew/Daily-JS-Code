//if else statements
function testElse(val) {
    let result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
    return result;
  }
  
  testElse(4);

//nested if else
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";}
  }
  
  testElseIf(7);

//switch case statement  

function caseInSwitch(val) {
    let answer = "";
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;       
  }
    return answer;
  }
  
  caseInSwitch(1);
////////////////////////
  function sequentialSizes(val) {
    let answer = "";
      switch (val){
        case 1:
        case 2:
        case 3:
          answer = "Low";
          break;
        case 4:
        case 5:
        case 6:
          answer = "Mid";
          break;
        case 7:
        case 8:
        case 9:
          answer = "High";
          break;  
      }
    return answer;
  }
  
  sequentialSizes(1);  