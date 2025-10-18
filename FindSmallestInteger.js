/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  const modCount = new Map();

  // Count the frequency of each remainder when divided by 'value'
  for (const num of nums) {
    const mod = ((num % value) + value) % value;
    modCount.set(mod, (modCount.get(mod) || 0) + 1);
  }

  let smallest = 0;

  while (true) {
    const mod = smallest % value;
    if (modCount.has(mod) && modCount.get(mod) > 0) {
      modCount.set(mod, modCount.get(mod) - 1);
    } else {
      break;
    }
    smallest++;
  }
  return smallest;
};


// Example usage;
console.log(findSmallestInteger([1,2,3,4,4,4,5], 3, 5, 6, 6, 6));