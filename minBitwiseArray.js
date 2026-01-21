/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const res = [];
        for (let n of nums) {
        if ((n & (n + 1)) === 0) {
            // n = 2^k - 1 (all ones)
            res.push(-1);
            continue;
        }

};