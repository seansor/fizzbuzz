describe("FizzBuzz Game", function() {
    describe("function should exist", function() {
        it("function should exist", function(){
            expect(fizzBuzz).toBeDefined();
        });
    });
    describe("Check input is a number", function() {
        it("should return 'Input Parameter must be a number.'", function() {
            var result = fizzBuzz('fifteen');
            expect(result).toBe("Input Parameter must be a number.");
        });
    });
    describe("should return Fizz, Buzz, FizzBuzz or num1", function() {
        it("should return 'FizzBuzz' for fizzBuzz(15)", function() {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return 'FizzBuzz' for fizzBuzz(-15)", function() {
            var result = fizzBuzz(-15);
            expect(result).toBe("FizzBuzz");
        });
        it("Should return 'Fizz' for fizzBuzz(9)", function() {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz")
        });
        it("Should return 'Fizz' for fizzBuzz(-9)", function() {
            var result = fizzBuzz(-9);
            expect(result).toBe("Fizz")
        });
        it("Should return 'Buzz' for fizzBuzz(10)", function() {
            var result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        });
        it("Should return 'Buzz' for fizzBuzz(-10)", function() {
            var result = fizzBuzz(-10);
            expect(result).toBe("Buzz");
        });
        it("Should return num1 for fizzBuzz(7)", function() {
            var result = fizzBuzz(7);
            expect(result).toBe(num1);
        });
        it("Should return num1 for fizzBuzz(-7)", function() {
            var result = fizzBuzz(-7);
            expect(result).toBe(num1);
        });
    });
})