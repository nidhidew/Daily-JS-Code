function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
      return "Yes, that was true";
    }
    return "No, that was false";
  }
  trueOrFalse(true);
  trueOrFalse(false);

function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
testEqual(10);

function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);