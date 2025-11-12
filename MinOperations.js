/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;

    // Helper GCD function
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // 1️⃣ Check overall gcd
    let overall = nums[0];
    for (let i = 1; i < n; i++) {
        overall = gcd(overall, nums[i]);
    }
    if (overall !== 1) return -1;

    // 2️⃣ Count existing 1s
    let ones = nums.filter(x => x === 1).length;
    if (ones > 0) return n - ones;

    // 3️⃣ Find smallest subarray with gcd == 1
    let minLen = Infinity;
    for (let i = 0; i < n; i++) {
        let g = nums[i];
        for (let j = i + 1; j < n; j++) {
            g = gcd(g, nums[j]);
            if (g === 1) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    // Total operations = (minLen - 1) + (n - 1)
    return (minLen - 1) + (n - 1);
};
