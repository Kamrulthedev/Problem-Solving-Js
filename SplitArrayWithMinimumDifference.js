/**
 * @param {number[]} nums
 * @return {number}
 */



var splitArray = function(nums) {
    const n = nums.length;

    if(n === 1) return -1;

    // Prefix Sum
    const prefixSum = new Array(n).fill(0);
    prefixSum[0] = nums[0];

    for(let i = 1; i < n; i++){
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    // strictly increasing
    const dec = new Array(n).fill(false);
    dec[n-1] = true;
    for(let i = n-2; i >= 0; i--){
        dec[i] = dec[i + 1] && nums [i] < nums[i +1];
    }
    let minDiff = Infinity;
    let found = false;

    for(let i = 0; i < n-1; i++){
       if(inc[1] && dec[i + 1]){
        found = true;
        const leftSum = prefixSum[i];
        const rigthSum = prefixSum[n-1] - prefixSum[i];
        const diff = Math.abs(leftSum - rigthSum);
        minDiff = Math.min(minDiff, diff);
       }
    }

    return found ? minDiff : -1;

};



