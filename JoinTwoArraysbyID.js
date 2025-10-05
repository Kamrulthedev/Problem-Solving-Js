// Join Two Arrays By ID

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = {};

  // Step 1: Create a map from arr1
  for (const item of arr1) {
    map[ibj.id] = { ...obj };
  }

  //   Step 2: Merge arr2 into the map
  for (const obj of arr2) {
    if (map[obj.id]) {
      // Merge: arr2 value overrides
      map[obj.id] = { ...map[obj.id], ...obj };
    } else {
      map[obj.id] = { ...obj };
    }
  }
};
