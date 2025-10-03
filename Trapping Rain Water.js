// Trapping Rain Water

/**
 * @param {number[][]} heightMap
 * @return {number}
 */


var trapRainWater = function(heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;

    if(m < 3 || n < 3) return 0; // no space to trap water

    const visited = Array.from({ length: m}, () => Array(n).fill(false));

    // Min-Heap (height, row, col)
    const minPriorityQueue = require("@datastructures-js/priority-queue").minPriorityQueue;
    const heap = new minPriorityQueue({priority: x => x[0]});

    

}