// Asynchronous Function

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise ((resolve, reject) =>{
        const results= [];
        let completed = 0;
        let hasError = false;

        functions.forEach((fn, index) =>{
            fn().then(value =>{
                if(hasError) return;

                results[index] = value;
                completed++;
                
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */