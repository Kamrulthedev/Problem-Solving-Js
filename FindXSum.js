/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const n = nums.length;
  const ans = [];

  for (let i = 0; i <= n - k; i++) {
    const freq = new Map();
  }

  //   Count frequencies of elements in the current window
  for (let j = i; j < i + k; j++) {
    freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
  }

  //   Convert frequency map to a sorted array of [element, frequency] pairs
  const arr = Array.from(freq.entries());

  //   Sort the array based on frequency (descending) and element value (ascending)
  arr.sort((a, b) => {
    if (b[1] === a[1]) return b[0] - a[0];
    return b[1] - a[1];
  });
};
