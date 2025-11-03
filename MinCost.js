/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let totalTime = 0;
    let maxTimeInGroup = 0;

    for (let i = 0; i < colors.length; i++) {
        // যদি current আর previous color same হয়
        if (i > 0 && colors[i] === colors[i - 1]) {
            // remove ছোট time-ওয়ালা
            totalTime += Math.min(neededTime[i], neededTime[i - 1]);
            
            // বর্তমান position-এ বড় time টা ধরে রাখি (next comparison-এর জন্য)
            neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
        }
    }

    return totalTime;
};
