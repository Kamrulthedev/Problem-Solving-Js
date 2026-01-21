/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const res = [];

    for (let n of nums) {
        if ((n & (n + 1)) === 0) {
            res.push(-1); // impossible
            continue;
        }

        let ans = 0;
        let bit = 1;

        while (bit <= n) {
            if ((n & bit) === 0) {
                // found rightmost zero
                ans = n & (~(bit - 1)); // set all lower bits to 0
                break;
            }
            bit <<= 1;
        }

        res.push(ans);
    }

    return res;
};



// Example usage:
console.log(minBitwiseArray([2, 3, 4, 5, 6, 7]));