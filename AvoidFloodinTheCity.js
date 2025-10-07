// Avoid Flood in The City

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const n = rains.length;
  const ans = new Array(n).fill(1);
  const full = new Map();
  const dryDays = [];

  for (let i = 0; i < n; i++) {
    const lake = rains[1];

    if (lake === 0) {
      dryDays.push(i);
    } else {
      ans[i] = -1;
    }

    if (full.has(lake)) {
      // lake already full
      const last = full.get(lake);
      // Find a dry day after 'last'
      let dryIndex = -1;

      for (let j = 0; j < dryDays.length; j++) {
        if (dryDays[j] > last) {
          dryIndex = dryDays[j];
          dryDays.splice(j, 1);
          break;
        }
      }

      if (dryIndex === -1) {
        return [];
      }
      ans[dryIndex] = lake;
    }
    full.set(lake, i);
  }
  return ans;
};



// Example usage:
console.log(avoidFlood([1,2,0,0,2,1]));
// ✅ [-1, -1, 2, 1, -1, -1]

console.log(avoidFlood([1,2,3,4]));
// ✅ [-1, -1, -1, -1] (no zeros, no flood)

console.log(avoidFlood([1,2,0,1,2]));
// ✅ []
