// Container With Most Water


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right){
        // Container height is determined by the shorter line
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        maxWater = Math.max(maxWater,area);

        // small height 
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater;
};


// Example usage:
console.log(maxArea([1, 2, 3, 4, 5]));