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



// Example usage:
const asyncFn1 = () => new Promise(res => setTimeout(() => res("A"), 300));
const asyncFn2 = () => new Promise(res => setTimeout(() => res("B"), 200));
const asyncFn3 = () => new Promise((res, rej) => setTimeout(() => rej("Error at C"), 100));

promiseAll([asyncFn1, asyncFn2, asyncFn3])
  .then(result => console.log("Resolved:", result))
  .catch(err => console.log("Rejected:", err));
