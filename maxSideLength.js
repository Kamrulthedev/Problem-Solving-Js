/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;

  // Build prefix sum
  const pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));


  for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            pre[i][j] =
                mat[i - 1][j - 1]
                + pre[i - 1][j]
                + pre[i][j - 1]
                - pre[i - 1][j - 1];
        }
    }
};
