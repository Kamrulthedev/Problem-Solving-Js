/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are never palindrome
    if (x < 0) return false;

    const str = x.toString();
    const reversed = str.split('').reverse().join('');

    return str === reversed;
};