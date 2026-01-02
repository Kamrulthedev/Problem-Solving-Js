/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = baskets.length;
  const size = 1 << Math.ceil(Math.log2(n));
  const seg = new Array(size * 2).fill(0);

  // Build segment tree
  for (let i = 0; i < n; i++) {
    seg[size + i] = baskets[i];
  }
  for (let i = size - 1; i > 0; i--) {
    seg[i] = Math.max(seg[i * 2], seg[i * 2 + 1]);
  }

  // Find leftmost index with value >= target
  function findIndex(target) {
    if (seg[1] < target) return -1;
    let idx = 1;
    while (idx < size) {
      if (seg[idx * 2] >= target) {
        idx = idx * 2;
      } else {
        idx = idx * 2 + 1;
      }
    }
    return idx - size;
  }

  let unplaced = 0;

  for (let fruit of fruits) {
    const idx = findIndex(fruit);
    if (idx === -1) {
      unplaced++;
    } else {
      // mark basket as used
      let pos = size + idx;
      seg[pos] = 0;
      while (pos > 1) {
        pos >>= 1;
        seg[pos] = Math.max(seg[pos * 2], seg[pos * 2 + 1]);
      }
    }
  }

  return unplaced;
};

// Example usage:
console.log(numOfUnplacedFruits([2, 3, 4, 5, 7, 8, 9, 10]));
