/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;

    for(let op of operations){
        if(op.includes('+')){
            x +=1;
        }else{
            x -=1;
        }
    }
    return x;
};


// Example usage:
