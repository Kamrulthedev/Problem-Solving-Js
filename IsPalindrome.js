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

// Example usage:
console.log(isPalindrome(121));   // true




// New Formulation
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // For odd digits: remove middle digit using Math.floor(reversed / 10)
    return x === reversed || x === Math.floor(reversed / 10);
};

// Example usage:
console.log(isPalindrome(-121));

