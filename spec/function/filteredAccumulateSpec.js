describe('test filtered accumulate', function () {
    
    it('test sum', function () {
        function filter(x){return x % 2 == 0;}
        function term(x) {return x;}
        function next(x) {return x + 1;}
        function combiner(x, accumulate) {return x + accumulate;}
        var null_value = 0;
        expect(filteredAccumulate(filter, combiner, null_value, term, 0, next, 10)).toBe(30);
    });
    
});