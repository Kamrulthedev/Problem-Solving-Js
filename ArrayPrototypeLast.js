// Arry Prototype Last

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length === 0){
        return -1;
    }
    return this[this.length - 1];
};

// Example usage:
 const arr = [1, 2, 3, 4, 5];
 console.log(arr.last())
 