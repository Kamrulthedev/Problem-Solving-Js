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
  pq.enqueue([grid[0][0], 0, 0]);
  visited[0][0] = true;

  //   Create a While Loop to process the queue
  while (!pq.isEmpty()) {
    const [t, r, c] = pq.dequeue().element;

    //    If reached the bottom-right corner, return the time
    if (r === n - 1 && c === n - 1) return t;
    for (const [dr, dc] of directions) {
      const nr = r + dr,
        nc = c + dc;
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
        visited[nr][nc] = true;
        pq.enqueue([Math.max(t, grid[nr][nc]), nr, nc]);
      }
    }
  }

  //   return -1 if no path found
  return -1;
};
