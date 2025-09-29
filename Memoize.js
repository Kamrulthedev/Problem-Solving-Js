// Memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache =new Map();

    return function(...args) {
        
    }
}


// Example usage:
let callCount = 0;
const memoizedFn = memoize(function (a, b){
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(4,5));
console.log(callCount);