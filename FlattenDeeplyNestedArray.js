// Flatten Deeply Nasted Array

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item) && n > 0) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }

  //   return result;
  return result;
};


// Example usage:
console.log(flat([1, [2, [3, [4]]]], 1));  