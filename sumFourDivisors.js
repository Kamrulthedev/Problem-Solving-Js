/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let totalSum = 0;
    
        for (let num of nums) {
        let sum = 0;
        let count = 0;
        for (let d = 1; d * d <= num; d++) {
            if (num % d === 0) {
                let d2 = num / d;
};