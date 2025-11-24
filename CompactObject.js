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



// Example usage:
const input = {
    a: null,
    b: [false, 1, 0, 2, '', [null, 3]],
    c: {
        d: 0,
        e: undefined,
        f: 'hello',
        g: {
            h: NaN,
            i: 'world'
        }
    },
    j: false
};

const result = compactObject(input);

console.log(result);
// Output:
// {
//   b: [1, 2, [3]],
//   c: {
//     f: 'hello',
//     g: {
//       i: 'world'
//     }
//   }
// }