/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += i % 2 === 0 ? nums[i] : -nums[i];
    }
    return sum;
};