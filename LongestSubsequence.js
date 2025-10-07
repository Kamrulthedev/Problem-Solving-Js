// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    const n = nums.length;
    let total = 0;
    for (const x of nums) total ^= x;

    if (total !== 0) return n;

    // total == 0: check if there's any non-zero element
    for (const x of nums) {
        if (x !== 0) return n - 1;
    }

    // all zeros -> impossible
    return 0;
};
