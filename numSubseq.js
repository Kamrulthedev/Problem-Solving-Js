/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const pow2 = new Array(n).fill(1);

    // Precompute powers of 2
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    let l = 0, r = n - 1;
    let result = 0;

    while (l <= r) {
        if (nums[l] + nums[r] <= target) {
            result = (result + pow2[r - l]) % MOD;
            l++;
        } else {
            r--;
        }
    }

    return result;
};
