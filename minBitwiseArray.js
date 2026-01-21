/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const res = [];

    for (let n of nums) {
        // Case: n = 1,3,7,15,... (all ones) → impossible
        if ((n & (n + 1)) === 0) {
            res.push(-1);
            continue;
        }

        // Find the rightmost 0 bit
        let bit = 1;
        while ((n & bit) !== 0) bit <<= 1;

        // ans[i] = n with all bits right of this zero set to 0
        let ans = n & (~(bit - 1));
        res.push(ans);
    }

    return res;
};



// Example usage:
console.log(minBitwiseArray([2, 3, 4, 5, 6, 7]));