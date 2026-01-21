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

        // Find ans[i] = n with trailing zeros preserved
        let ans = n;
        // Turn off the least significant 1 bit
        // so that ans | (ans+1) == n
        let bit = 1;
        while ((ans | (ans + 1)) !== n) {
            ans &= ~bit;
            bit <<= 1;
        }
        res.push(ans);
    }

    return res;
};
