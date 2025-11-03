/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();// Step 1: Remove leading/trailing spaces
    if(s.length === 0) return 0;

let sign = 1;
let i = 0;
let result = 0;


// Step 2: Check for sign
  if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }

};