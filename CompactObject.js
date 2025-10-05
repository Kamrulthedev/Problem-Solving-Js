// Compact Object
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // 1️⃣ if falsy, derectly return false
    if (!obj) return false;

    // 2️⃣ if array 
    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            const val = compactObject(item);
            if (val) result.push(val);
        }
        return result;
    }

    // 3️⃣ if object 
    if (typeof obj === 'object') {
        const result = {};
        for (const key in obj) {
            const val = compactObject(obj[key]);
            if (val) result[key] = val;
        }
        return result;
    }

    // 4️⃣ primitive value 
    return obj;
};
