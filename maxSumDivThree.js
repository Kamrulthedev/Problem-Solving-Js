/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  let total = 0;
  let ram1 = [];
  let ram2 = [];

  //   Step 1: total sum + categorise remainders
  for (let num of nums) {
    total += num;
    if (num % 3 === 1) ram1.push(num);
    else if (num % 3 === 2) ram2.push(num);
  }

  //   Sort remainder groups (ascending)
  ram1.sort((a, b) => a - b);
  ram2.sort((a, b) => a - b);

  //   If already divisible by 3
  if (total % 3 === 0) return total;

  let ans = 0;

  //   Case 1 > total % 3 === 1
  if (total % 3 === 1) {
    let option1 = ram1.length > 0 ? ram1[0] : Infinity;
    let option2 = ram2.length > 1 ? ram2[0] + ram2[1] : Infinity;

    ans = total - Math.min(option1, option2);
  }
  // Case 2 → total % 3 == 2
  else {
    let option1 = ram2.length > 0 ? ram2[0] : Infinity;
    let option2 = ram1.length > 1 ? ram1[0] + ram1[1] : Infinity;
    ans = total - Math.min(option1, option2);
  }

  return ans;
};


// Example usage:
nums = [3, 5, 3, 4, 2, 3];