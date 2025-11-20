/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    intervals.sort((a, b) => {
        if (a[1] === b[1]) return b[0] - a[0];
        return a[1] - b[1];
    });

    let result = 0;
    let a = -1, b = -1;  

    for (let [start, end] of intervals) {

        const insideA = (a >= start && a <= end);
        const insideB = (b >= start && b <= end);

        if (insideA && insideB) continue;

        if (insideB) {
            result += 1;
            a = b;     
            b = end;      
            continue;
        }
        // Case 3: None inside → need 2 numbers
        result += 2;
        a = end - 1;
        b = end;
    }

    return result;
};
