// Debounce Function

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;


    return function(...args) {

        clearTimeout(timeoutId);

        return new Promise((resolve) => {
             timeoutId = setTimeout(() =>{
                resolve(fn(...args));
             }, t);
        });
    };
};


// Example usage:
const log = debounce(console.log, 100);
 log('Hello'); 
 log('Hello'); 
 log('Hello'); 
