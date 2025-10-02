

/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
  const MOD = 1e9 + 7;
  const m = r - l + 1; // possible values count

  // dp[i][x][dir] -> ith length, last value index x, last direction
  // dir: 0 = none, 1 = up, -1 = down
  const dp = Array.from({length: n+1}, 
              () => Array.from({length: m}, 
                  () => Array(3).fill(0)));

  // base case
  for (let x = 0; x < m; x++) {
    dp[1][x][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let x = 0; x < m; x++) {
      for (let d = 0; d < 3; d++) {
        let ways = dp[i][x][d];
        if (!ways) continue;

        for (let y = 0; y < m; y++) {
          if (y === x) continue; // no equal adj
          let newDir = (y > x ? 1 : -1);

          // disallow same direction twice
          if (d === 1 && newDir === 1) continue;
          if (d === 2 && newDir === -1) continue;

          dp[i+1][y][newDir === 1 ? 1 : 2] = 
             (dp[i+1][y][newDir === 1 ? 1 : 2] + ways) % MOD;
        }
      }
    }
  }

  let ans = 0;
  for (let x = 0; x < m; x++) {
    for (let d = 0; d < 3; d++) {
      ans = (ans + dp[n][x][d]) % MOD;
    }
  }
  return ans;
};