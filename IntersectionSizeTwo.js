/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    // Sort:
    // 1. By end ascending
    // 2. If end same → start descending
    intervals.sort((a, b) => {
        if (a[1] === b[1]) return b[0] - a[0];
        return a[1] - b[1];
    });

    let result = 0;
    let a = -1, b = -1;  // last two picked

    for (let [start, end] of intervals) {

        const insideA = (a >= start && a <= end);
        const insideB = (b >= start && b <= end);

        // Case 1: Both inside → do nothing
        if (insideA && insideB) continue;

        // Case 2: Only b inside → need 1 more
        if (insideB) {
            result += 1;
            a = b;          // shift
            b = end;        // pick largest possible
            continue;
        }

        // Case 3: None inside → need 2 numbers
        result += 2;
        a = end - 1;
        b = end;
    }

    return result;
};
