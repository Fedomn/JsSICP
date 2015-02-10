describe('test sum', function () {

    it('test process1', function () {
        expect(sum(function(x){return x;}, 1, function(x){return x+1;}, 10)).toBe(55);
    });


    it('test process2', function () {
        expect(sum(function(x){ return x * x * x;}, 1, function(x){ return x+1;}, 10)).toBe(3025);
    });

    it('test process3', function () {
        function term(x) {
            if(x % 2 == 0) return 0;
            return 1 / (x * (x+2));
        }
        function next(x) {
            if(x % 2 == 0) return x + 1;
            return x + 4;
        }
        expect(sum(term, 1, next, 11)).toBe(1/(1 * 3) + 1/(5 * 7) + 1/(9 * 11));
        expect(sum(term, 5, next, 11)).toBe(1/(5 * 7) + 1/(9 * 11));
        expect(sum(term, 2, next, 11)).toBe(1/(3 * 5) + 1/(7 * 9) + 1/(11 * 13));
    });
    
});