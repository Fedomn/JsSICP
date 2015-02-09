describe("test recursion", function(){

    it("test n < 3", function(){
        expect(f(-1)).toBe(-1);
        expect(f(0)).toBe(0);
        expect(f(1)).toBe(1);
    });

    it("test n >= 3", function () {
        expect(f(3)).toBe(4);
        expect(f(4)).toBe(11);
    });

});