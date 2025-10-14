/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;

    const isIncreasing = (start) => {
        for (let i = start; i < start + k - 1; i++) {
            if (nums[i] >= nums[i + 1]) return false;
        }
        return true;
    };

    for (let i = 0; i + 2 * k <= n; i++) {
        if (isIncreasing(i) && isIncreasing(i + k)) {
            return true;
        }
    }

    return false;
};
