/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const res = [];

    for (let n of nums) {
        if ((n & (n + 1)) === 0) {
            // all ones → impossible
            res.push(-1);
        } else {
            let x = n & ~(n + 1);
            res.push(n ^ x);
        }
    }

    return res;
};



// Example usage:
console.log(minBitwiseArray([2, 3, 4, 5, 6, 7]));