/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function isMagic(r, c) {
        const seen = new Set();

        // Check numbers 1-9 and distinct
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const val = grid[r + i][c + j];
                if (val < 1 || val > 9 || seen.has(val)) return false;
                seen.add(val);
            }
        }


};
