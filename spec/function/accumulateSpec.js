describe('test accumulate', function () {
    
    it('test sum process1', function () {
        function term(x) {return x;}
        function next(x) {return x + 1;}
        function combiner(x, accumulate) {
            return x + accumulate;
        }
        var null_value = 0;
        expect(accumulate(combiner, null_value, term, 1, next, 10)).toBe(55);
    });

    it('test sum process2', function () {
        function term(x) {return x * x * x;}
        function next(x) {return x + 1;}
        function combiner(x, accumulate) {
            return x + accumulate;
        }
        var null_value = 0;
        expect(accumulate(combiner, null_value, term, 1, next, 10)).toBe(3025);
    });

    it('test product', function () {
        function term(x) {return x * 3;}
        function next(x) {return x + 1;}
        function combiner(x, accumulate){
            return x * accumulate;
        }
        var null_value = 1;
        expect(accumulate(combiner, null_value, term, 1, next, 2)).toBe(1 * 3 * 2 * 3);
    });
    
});