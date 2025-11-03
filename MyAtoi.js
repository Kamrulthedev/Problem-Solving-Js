/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Step 1: Remove leading/trailing spaces
    s = s.trim();
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


    // Step 4: Clamp within 32-bit signed integer range
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
};



// Example usage:
console.log(myAtoi("42"));              // ➜ 42
console.log(myAtoi("   -42"));          // ➜ -42
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));   
console.log(myAtoi("-91283472332"));    
