// Swim in Rising Water

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // Min-Heap (priority queue) implementation
    class MinHeap {
        constructor() { this.data = []; }
        push(val) {
            this.data.push(val);
            this._bubbleUp(this.data.length - 1);
        }
        pop() {
            if (this.data.length === 1) return this.data.pop();
            const top = this.data[0];
            this.data[0] = this.data.pop();
            this._bubbleDown(0);
            return top;
        }
        _bubbleUp(i) {
            const data = this.data;
            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);
                if (data[parent][0] <= data[i][0]) break;
                [data[parent], data[i]] = [data[i], data[parent]];
                i = parent;
            }
        }
        _bubbleDown(i) {
            const data = this.data;
            const n = data.length;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;
                if (left < n && data[left][0] < data[smallest][0]) smallest = left;
                if (right < n && data[right][0] < data[smallest][0]) smallest = right;
                if (smallest === i) break;
                [data[i], data[smallest]] = [data[smallest], data[i]];
                i = smallest;
            }
        }
        isEmpty() { return this.data.length === 0; }
    }

    const heap = new MinHeap();
    heap.push([grid[0][0], 0, 0]);
    visited[0][0] = true;

    while (!heap.isEmpty()) {
        const [t, r, c] = heap.pop();
        if (r === n - 1 && c === n - 1) return t;

        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < n && nc < n && !visited[nr][nc]) {
                visited[nr][nc] = true;
                heap.push([Math.max(t, grid[nr][nc]), nr, nc]);
            }
        }
    }

    return -1;
};




// Example usage:
console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
);
