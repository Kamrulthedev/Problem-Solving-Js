/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {   
    const n = nums.length;
    const ans = [];

    for (let i = 0; i <= n - k; i++) {
        const freq = new Map();

        // Count frequency in current window
        for (let j = i; j < i + k; j++) {
            freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
        }

        // Convert to sortable array
        const arr = Array.from(freq.entries());

        // Sort by freq desc, then value desc
        arr.sort((a, b) => {
            if (b[1] === a[1]) return b[0] - a[0];
            return b[1] - a[1];
        });

        // Take top x and sum up (num * freq)
        let sum = 0;
        for (let t = 0; t < Math.min(x, arr.length); t++) {
            const [num, count] = arr[t];
            sum += num * count;
        }

        ans.push(sum);
    }

    return ans;
};



// Example usage:
console.log(findXSum([2, 3, 2, 5, 3], 3, 2)); // [7, 8, 8]
console.log(findXSum([1,1,1,1], 2, 1)); // [2,2,2]
console.log(findXSum([5,4,3,2,1], 3, 2)); // [9,7,5]

