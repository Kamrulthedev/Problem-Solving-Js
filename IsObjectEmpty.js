// Check if Object is Empty


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    if(Array.isArray(obj)){
        return obj.length === 0;
    }

    return Object.keys(obj).length === 0;
};



// Example usage:
console.log(isEmpty({a: 3}));