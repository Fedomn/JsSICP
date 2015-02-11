describe('test product', function () {
    
    it('test', function () {
        expect(product(function(x){return x * 3;}, 1, function(x){return x + 1;}, 2)).toBe(1 * 3 * 2 * 3);
    });
    
});