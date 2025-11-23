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


  
};
