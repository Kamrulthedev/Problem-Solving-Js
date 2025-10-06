// Swim in Rising Water

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const t = grid.length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = Array.from({ length: t }, () => Array(t).fill(false));

  //   Min-Heap implementation
  const pq = new MinPriorityQueue({ priority: x[0] });
};
