const { isNull, isString } = require("util");

function multiply(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)){
        if (!isString(num1) && !isString(num2) && !isNull(num1) && !isNull (num2)){
            console.log (num1*num2)
        } 
        else {
          console.log("Please provide a number only!");
        }
    } else {
        console.log ("Please provide a value!")
    }
}

multiply(2,4);
multiply("2",4);
multiply(true,null);
multiply(undefined,"2");

    // example
    // num1 = 2, num2 = 4, return 8
    // num1 = "2", num2 = 4, return "Please provide a number only!"
    // num1 = true, num2 = null, return "Please provide a number only!"
    // num1 UNDEFINED, num2 = "2", return "Please provide a value!"
     