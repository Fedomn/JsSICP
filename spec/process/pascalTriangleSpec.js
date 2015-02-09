describe("test pascalTriangle", function () {
    
    it("test pascalTriangle", function () {
        expect(pascalTriangle(1)).toBe("1\n");
        expect(pascalTriangle(3)).toBe('1\n1 1\n1 2 1\n');
        expect(pascalTriangle(5)).toBe('1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1\n');
    });

});