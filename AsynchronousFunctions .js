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

                if(completed === functions.length){
                    resolve(results);
                }
            })
            .catch(err => {
                if(!hasError){
                    hasError = true;
                    reject(err);
                }
            });

        });

        if(functions.length === 0) {
            resolve([]);
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */