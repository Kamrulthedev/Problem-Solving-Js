/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const answer = [];
    let mod = 0;

    for(let i = 0; i < nums.length; i++){
        mod = (mod * 2 + nums[i]) % 5;
        answer.push(mod === 0);
    }
    return answer;
};



// Example usage:
const nums = [1, 0, 1]; // Binary representation of prefixes: [1, 10, 101]
const result = prefixesDivBy5(nums);

console.log(result); // Output: [false, false, true]