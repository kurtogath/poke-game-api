const assert = require('chai').assert;

function addValue(a, b){
    return a + b;
}


describe('Suite de prueba', () => {
    it('should return 4', () => {
        const number = addValue(2, 2);
        assert.equal(number, 4)
    }) 
});