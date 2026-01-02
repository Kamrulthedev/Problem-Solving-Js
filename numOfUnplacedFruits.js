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


    
};



