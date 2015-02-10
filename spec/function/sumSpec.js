describe('test sum', function () {

    it('test process1', function () {
        function next(x) { return ++x; }
        function term(x) { return x; }
        expect(sum(term, 1, next, 10)).toBe(55);
    });


    it('test process2', function () {
        function next(x) { return ++x; }
        function term(x) { return x * x * x; }
        expect(sum(term, 1, next, 10)).toBe(3025);
    });

    it('test process3', function () {
        function next(x) { return x + x % 2 + 1; }
        function term(x) { return 1 / ((x * 2 - 1) * (x * 2 + 1)); }
        expect(sum(term, 1, next, 11)).toBe(1/(1 * 3) + 1/(5 * 7) + 1/(9 * 11));
    });
    
});