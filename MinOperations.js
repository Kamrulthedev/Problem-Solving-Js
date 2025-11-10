/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let n = nums.length;
    let i = 0;
    let ops = 0;

    while (i < n) {
        // skip zeros
        if (nums[i] === 0) {
            i++;
            continue;
        }

        // we are at start of a non-zero contiguous segment
        const seen = new Set();
        while (i < n && nums[i] !== 0) {
            seen.add(nums[i]);
            i++;
        }

        ops += seen.size;
    }

    return ops;
};
