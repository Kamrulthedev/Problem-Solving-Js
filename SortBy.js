// Sort By

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b));
};


// Example usage:
console.log(sortBy([1, 2, 3, 4, 5], n => -n));
