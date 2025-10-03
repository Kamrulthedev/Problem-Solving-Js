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


    // Step 1: Push All The boundary cells into the min-heap and mark them as visited
    for(let i = 0; i < m; i++){
        for(let j of [0, n - 1]){
           heap.enqueue([heightMap[i][j], i, j]);
           visited[i][j] = true;
        }
    }

    for (let j = 0; j < n; j++) {
        for (let i of [0, m - 1]) {
            if (!visited[i][j]) {
                heap.enqueue([heightMap[i][j], i, j]);
                visited[i][j] = true;
            }
        }
    }

    // Step 2 : BFS expansion 
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let water = 0;

    


}