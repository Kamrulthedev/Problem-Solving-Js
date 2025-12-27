/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    let res = new Set();
    let cur = new Set();

    for (let num of arr) {
        let nextCur = new Set([num]);
        for (let val of cur) {
            nextCur.add(val | num);
        }
        cur = nextCur;
        for (let val of cur) res.add(val);
    }

    return res.size;
};


// Example usage:
console.log(subarrayBitwiseORs([0]));