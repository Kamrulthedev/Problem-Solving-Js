/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};



// Example usage:
const fn1 = compose([x => x + 1, x => 2 * x]);
console.log(fn1(4)); // 9   => (4*2) + 1

const fn2 = compose([]);
console.log(fn2(5)); // 5   => identity function

const fn3 = compose([x => x - 2, x => x * x, x => x + 3]);
console.log(fn3(2)); 
// Step by step: x+3=5 → (5*5)=25 → (25-2)=23


