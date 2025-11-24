/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
  const n = nums.length;
  
  if (n < 2) return -1; 

  // prefix sums
  const prefixSum = Array(n).fill(0);
  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i-1] + nums[i];
  }
  
  const inc = Array(n).fill(false);
  inc[0] = true;
  for (let i = 1; i < n; i++) {
    inc[i] = inc[i-1] && nums[i-1] < nums[i];
  }
  
  const dec = Array(n).fill(false);
  dec[n-1] = true;
  for (let i = n-2; i >= 0; i--) {
    dec[i] = dec[i+1] && nums[i] > nums[i+1];
  }
  
  let minDiff = Infinity;
  let found = false;
  
  for (let i = 0; i < n-1; i++) {
    if (inc[i] && dec[i+1]) {
      found = true;
      const leftSum = prefixSum[i];
      const rightSum = prefixSum[n-1] - prefixSum[i];
      const diff = Math.abs(leftSum - rightSum);
      minDiff = Math.min(minDiff, diff);
    }
  }
  
  return found ? minDiff : -1;
};



// Example usage:
const nums1 = [1, 2, 3, 4, 5];
console.log(splitArray(nums1)); // Output: 3

const nums2 = [5, 4, 3, 2, 1];
console.log(splitArray(nums2)); // Output: -1

const nums3 = [1, 3, 2, 4, 5];
console.log(splitArray(nums3)); // Output: 1