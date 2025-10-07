/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeSubstring = function(s, k) {
    const stack = [];
    for (const ch of s) {
        stack.push(ch);
        // check if the top 2k characters form '(' * k + ')' * k
        if (stack.length >= 2 * k) {
            const lastPart = stack.slice(-2 * k);
            if (lastPart.join('') === '('.repeat(k) + ')'.repeat(k)) {
                // remove them
                for (let i = 0; i < 2 * k; i++) stack.pop();
            }
        }
    }
    return stack.join('');
};






















