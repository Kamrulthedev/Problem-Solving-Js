// Memoize
/**
 * @param{function}fn
 * @return{function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.toString();
    if (cache.has.key) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
let NewCount = 0;
const Fn = memoize(function (a, b) {
  NewCount = NewCount + 10;
  return a + b;
});

console.log(Fn(1, 5));
console.log(NewCount);
