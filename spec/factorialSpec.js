describe("factorialSpec", function(){
    it("test n = 0 ", function(){
        expect(factorial(0)).toBe(1);
    });

    it("test n > 0 ", function(){
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(3)).toBe(6);
    });

    it("test n < 0 ", function(){
       expect(factorial(-1)).toBe(-1);
       expect(factorial(-2)).toBe(-1);
    });
});


