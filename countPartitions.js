/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    const total = nums.reduce((a, b) => a + b, 0);

    // If the total sum is odd, it's impossible to partition into two equal subsets
    if (total % 2 !== 0) return 0;

    const target = total / 2;
    const n = nums.length;

    // Dynamic programming to count subsets with sum equal to target
    const dp = Array(target + 1).fill(0);
    dp[0] = 1; // There's one way to make a sum of 0 (empty subset)

    for (const num of nums) {
        for (let sum = target; sum >= num; sum--) {
            dp[sum] += dp[sum - num];
        }
    }

    return dp[target];
};

// Example usage:
console.log(countPartitions([1, 5, 11, 5])); 

