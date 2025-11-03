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


 // Step 3: Process digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }

    result *= sign;

};