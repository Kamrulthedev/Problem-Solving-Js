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
};
