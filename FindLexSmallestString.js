/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    const visited = new Set();
    let smallest = s;

    // Add Operation
    const addOperation = (str) =>{
        const arr = str.split('');
        for(let i =1; i < arr.length; i +=2){
            arr[i] = ((+arr[i] + a) % 10).toString();
        }
        return arr.join('')
    };

    // Rotate Operation
    const rotateOperation = (str) => {
           const n = str.slice(n - b) + str.slice(0, n - b);
    };


};