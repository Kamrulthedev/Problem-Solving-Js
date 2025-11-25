/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    if(k % 2 === 0 || k % 5 ===0) return -1;

    let mod = 0;
    for(let length = 1; length <= k; length++){
        mod = (mod * 10 + 1) % k;
        if(mod === 0) return length;
    }

    return -1;
};



// Example usage: 
console.log(smallestRepunitDivByK(1)); // Output: 1
console.log(smallestRepunitDivByK(3)); // Output: 3