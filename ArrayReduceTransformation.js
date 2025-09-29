// Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  let accumulated = init;
  for (let i = 0; i < nums.length; i++) {
    accumulated = fn(accumulated, nums[i]);
  }
  console.log(accumulated);
  return accumulated;
};




// Example usage:
const nums = [1, 2, 3, 4];
const fn = (acc, curr) => {
    const accPlusCurr =acc + curr;
    console.log(acc,curr)
    return accPlusCurr;
}; 
const init = 0;

console.log(reduce(nums, fn, init)); 