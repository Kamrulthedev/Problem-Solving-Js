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