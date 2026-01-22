/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;

    // Create a in increasing 
    const isIncreasing = (start) => {
        for (let i = start; i < start + k - 1; i++) {
            if (nums[i] >= nums[i + 1]) return false;
        }
        return true;
    };

    // Create  a for loop
    for (let i = 0; i + 2 * k <= n; i++) {
        if (isIncreasing(i) && isIncreasing(i + k)) {
            return true;
        }
    }
// return this false
    return false;
};



// Example usage:
console.log(hasIncreasingSubarrays([1,2,3,4,5,6], 2));
