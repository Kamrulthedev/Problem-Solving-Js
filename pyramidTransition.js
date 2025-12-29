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

    
function dfs(curr) {
        if (curr.length === 1) return true;

        function buildNext(idx, next) {
            if (idx === curr.length - 1) {
                return dfs(next);
            }

            const key = curr[idx] + curr[idx + 1];
            if (!map.has(key)) return false;

            for (let ch of map.get(key)) {
                if (buildNext(idx + 1, next + ch)) {
                    return true;
                }
            }
            return false;
        }

        return buildNext(0, "");
    }

    return dfs(bottom);
};


// Example usage:
console.log(pyramidTransition)
