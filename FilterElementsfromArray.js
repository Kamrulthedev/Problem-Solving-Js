/**
// Filter Elements from Array

/**
 * 
 * @param {number[]} arr 
 * @param {Function} fn 
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  console.log(result);

  return result;
};


const arr = [0, 10, 20, 30];
const fn = (n) => n > 10;

console.log(filter(arr, fn)); 
// Output: [20, 30]
