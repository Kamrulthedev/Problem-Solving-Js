/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b); // Step 1: sort array

  let minDiff = Infinity;
  let res = [];

  // Step 2: find minimum difference
  for (let i = 0; i < arr.length - 1; i++) {
    minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
  }

  // Step 3: collect all pairs with that difference
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === minDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }

  return res;
};
