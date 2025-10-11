// Maximum Total Damage 

/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    // Step 1: count total damage per unique value
    const damageMap = new Map();
    for (const val of power) {
        damageMap.set(val, (damageMap.get(val) || 0) + val);
    }

    // Step 2: sort unique damages
    const unique = Array.from(damageMap.keys()).sort((a, b) => a - b);
    const n = unique.length;

    // Step 3: DP array
    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const currVal = unique[i];
        const currDamage = damageMap.get(currVal);

        // pick current
        let pick = currDamage;
        // find last non-conflicting index
        let j = i - 1;
        while (j >= 0 && unique[j] >= currVal - 2) j--;
        if (j >= 0) pick += dp[j];

        // skip current
        const skip = i > 0 ? dp[i - 1] : 0;

        dp[i] = Math.max(pick, skip);
    }

    return dp[n - 1];
};

// Example usage:
console.log(maximumTotalDamage([2, 2, 3, 3, 3, 4]));
