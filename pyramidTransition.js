/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    const map = new Map();

        // Build mapping
    for (let str of allowed) {
        const key = str.slice(0, 2);
        const val = str[2];
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(val);
    }

    
};