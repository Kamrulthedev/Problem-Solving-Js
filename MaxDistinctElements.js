/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a,b) => a-b);
    let count = 0;
    let prev = -Infinity;

    for (let num of nums) {
        // Adjust the number to be at least prev+1
        let adjusted = Math.max(prev + 1, num - k);
        if (adjusted <= num + k) { // check if adjustment is possible
            count++;
            prev = adjusted;
        }
        // else cannot place this element distinctively
    }

    return count;
};