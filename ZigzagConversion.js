/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length <= numRows) return s;

    const rows = Array.from({length : numRows}, () => "");
    let currentRow = 0;
    let goingDown = false;

    
};