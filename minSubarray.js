/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const total = nums.reduce((a, b) => a + b, 0);
    const target = total % p;
    if (target === 0) return 0;

    const map = new Map();
    map.set(0, -1);  // prefix before array starts (virtual index)

    let prefix = 0;
    let result = nums.length;

    for (let j = 0; j < nums.length; j++) {
        prefix = (prefix + nums[j]) % p;

        const needed = (prefix - target + p) % p;

        if (map.has(needed)) {
            result = Math.min(result, j - map.get(needed));
        }

        map.set(prefix, j);
    }

    return result === nums.length ? -1 : result;
};
