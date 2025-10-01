// Water Bottles

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

var numWaterBottles = function (numBottles, numExchange){
    let totalDrank = 0;
    let emptyBottles = 0;

    while(numBottles > 0){
        totalDrank += numBottles;
        emptyBottles += numBottles;
        numBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles = emptyBottles % numExchange;
    }

    return totalDrank;
};

// Example usage:
console.log(numWaterBottles(9, 3));
