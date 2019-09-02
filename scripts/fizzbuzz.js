fizzBuzz = function(num1) {
    this.num1 = num1;
    if(typeof(num1) != "number" ) {
        return "Input Parameter must be a number.";
    }
    else {
        if(num1%3 == 0) {
            if(num1%5 == 0) {
                return("FizzBuzz");
            }
            else {
                return("Fizz");
            }
        }
        else if (num1%5 == 0) {
            return("Buzz");
        }
        else {
            return(num1);
        }
    }
};

var result = fizzBuzz(10);
console.log(result);