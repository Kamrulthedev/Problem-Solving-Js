// Successful Pairs of Spells 

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b)=> a - b);
    const n = potions.length;
    const result = [];

    for(let spell of spells){
        let left = 0, rigth = n -1, idx = n;
        
        while(left <= rigth){
            let mid = Math.floor((left + rigth) / 2);
            if(spell * potions[mid] >= success){
                idx = mid;
                rigth = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        result.push(n - idx);
    }
    return result;
};



// Example usage:
