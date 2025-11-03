/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let totalTime = 0;
    let maxTimeInGroup = 0;

    for (let i = 0; i < colors.length; i++) {
        if (i > 0 && colors[i] === colors[i - 1]) {
            totalTime += Math.min(neededTime[i], neededTime[i - 1]);
            
            neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
        }
    }

    return totalTime;
};


console.log(minCost("abaac", [1,2,3,4,5])); // Output: 3
console.log(minCost("abc", [1,2,3]));       // Output: 0
console.log(minCost("aabaa", [1,2,3,4,1])); // Output: 2


