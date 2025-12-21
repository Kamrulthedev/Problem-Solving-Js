/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length;
    const m = strs[0].length;

    // sorted[i] = true means strs[i] < strs[i+1] already confirmed
    const sorted = new Array(n - 1).fill(false);
    let deletions = 0;

    for (let col = 0; col < m; col++) {
        let needDelete = false;

        // check if this column breaks lexicographic order
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][col] > strs[i + 1][col]) {
                needDelete = true;
                break;
            }
        }

        // if bad column → delete it
        if (needDelete) {
            deletions++;
            continue;
        }

        // otherwise, update sorted status
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][col] < strs[i + 1][col]) {
                sorted[i] = true;
            }
        }
    }

    return deletions;
};
