/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let totalApples = apple.reduce((a, b) => a + b, 0);
    capacity.sort((a, b) => b - a); // largest first

    let count = 0;
    for (let cap of capacity) {
        totalApples -= cap;
        count++;
        if (totalApples <= 0) return count;
    }

    return -1; // in case total capacity < total apples
};
