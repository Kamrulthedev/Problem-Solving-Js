// Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args); //immediately invoke the function


    const Interval = setInterval(() => {fn(...args);}, t);

    return function cancelFn(){
        clearInterval(Interval)
    }
};


// Example usage: 
