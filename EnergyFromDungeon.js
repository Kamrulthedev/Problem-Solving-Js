/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    const n = energy.length;
    const dp = new Array(n).fill(0);
    let maxEnergy = -Infinity;

    // 
    for(let i = n - 1; i >= 0; i--){
        if(i + k < n){
            dp[i] = energy[i] + dp[i + k];
        }else{
            dp[i] = energy[i];
        }
        maxEnergy = Math.max(maxEnergy, dp[i]);
    }
    return maxEnergy;
};

// Example usage:
console.log(maximumEnergy([2, 3, 4, 5, 6, 99], 5));

