/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const n = nums.length;
  const keyIndices = [];

  // Step 1: collect all indices of 'key
  for (let i = 0; i < n; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  const result = new Set();

  // Step 2: add valid indices within k distance from each key index
  for (let j of keyIndices) {
    let start = Math.max(0, j - k);
    let end = Math.min(n - 1, j + k);

    for (let i = start; i <= end; i++) {
      result.add(i);
    }
  }

  // Step 3: return sorted result
  return [...result].sort((a, b) => a - b);
};

// Example usage:
nums = [3, 4, 9, 1, 3, 9, 5];
key = 9;
k = 1;
console.log(findKDistantIndices(nums, key, k));
