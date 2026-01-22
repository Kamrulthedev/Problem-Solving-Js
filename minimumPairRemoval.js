/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {}; /**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let operations = 0;

  const isNonDecreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  };

  while (!isNonDecreasing(nums)) {
    let minSum = Infinity;
    let idx = 0;

    // Find adjacent pair with minimum sum
    for (let i = 0; i < nums.length - 1; i++) {
      let sum = nums[i] + nums[i + 1];
      if (sum < minSum) {
        minSum = sum;
        idx = i;
      }
    }

    // Replace the pair with their sum
    nums.splice(idx, 2, minSum);
    operations++;
  }

  return operations;
};

// Example usage:
console.log(minimumPairRemoval([5, 3, 4, 5, 6]));
