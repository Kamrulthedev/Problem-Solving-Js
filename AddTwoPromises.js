/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};


let TwoPromises = async function (k1, k2) {
    const [v1, v2] = await Promise.all([k1, k2]);
    return v1 + v2;
    
}



// Example usage:
TwoPromises(Promise.resolve(2), Promise.resolve(3).then(console.log));

// Example usage:
addTwoPromises(Promise.resolve(2), Promise.resolve(3)).then(console.log); 
console.log(addTwoPromises(Promise.resolve(2), Promise.resolve(3)));



