/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    // keep value + index together
    const arr = nums.map((val, idx) => [val, idx]);

    // sort by value descending
    arr.sort((a, b) => b[0] - a[0]);

    // pick first k items (largest values)
    const picked = arr.slice(0, k);

    // now sort picked items by original index
    picked.sort((a, b) => a[1] - b[1]);

    // return values only
    return picked.map(item => item[0]);
};