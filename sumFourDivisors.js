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
                
                if (d === d2) {
                    count += 1;
                    sum += d;
                } else {
                    count += 2;
                    sum += d + d2;
                }
                                if (count > 4) break;
            }
        }
if (count === 4) {
            totalSum += sum;
        }
    }
};