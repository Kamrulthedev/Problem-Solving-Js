/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let operations = 0;

  for (let num of nums) {
    let r = num % 3;
    if (r !== 0) {
      operations += 1;
    }
  }

  return operations;
};

// Example usage:
nums = [1, 2, 3, 4, 5, 6];
console.log(minimumOperations(nums));
