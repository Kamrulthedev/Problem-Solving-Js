/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonalSq = 0;
    let maxArea = 0;

    for (let [l, w] of dimensions) {
        let diagSq = l * l + w * w;
        let area = l * w;

        if (diagSq > maxDiagonalSq) {
            maxDiagonalSq = diagSq;
            maxArea = area;
        } else if (diagSq === maxDiagonalSq) {
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};


// Example usage:
console.log(areaOfMaxDiagonal([[2, 3, 4, 5, 6, 7]]))