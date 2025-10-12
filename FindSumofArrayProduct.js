// Find Sum of Array Product of Magical Sequences


/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function(m, k, nums) {
    const n = nums.length;
    const MOD =le9 + 7;

    // dp[len][mask] = sum of products
    const dp = Array.from({length : m + 1}, ()=> new Map());
    dp[0].set(0, 1);

    for(let len = 0; len < m; len++){
        for(const [mask, val] of dp[len]){
            for(let i =0; i < n; i++){
                const newMask = mask | (1 << i);
                const newVal = (val * nums[i]) % MOD;
                dp[len + 1].set(
                    newMask,
                    (dp[len + 1].get(newMask) || 0) + newVal
                );
                dp[len + 1].set(newMask, dp[len + 1].get(newMask) % MOD);
            }
        }
    }

    // Sum up results where mask has exactly k bits set
    let res = 0;
    for(const [mask, val] of dp[m]){
        if(countBits (mask) === k){
            res = (res + val) % MOD;
        }
    }
    return res;
};


function countBits(x){
    return x.toString(2).split("1").length - 1;   
}



// Example usage:
console.log(magicalSum(2, 1, [2, 3]));
