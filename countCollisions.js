/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let n = directions.length;

    let l = 0;
    while (l < n && directions[l] === 'L') l++;

    let r = n - 1;
    while (r >= 0 && directions[r] === 'R') r--;

    let collisions = 0;

    for (let i = l; i <= r; i++) {
        if (directions[i] !== 'S') collisions++;
    }

    return collisions;
};


// Example usage:
console.log(countCollisions("RLRSLL KAMRUL HASSAN"));