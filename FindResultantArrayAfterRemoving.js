/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const result = [words[0]];

    for(let i = 1; i< words.length; i++){
        const prev = result[result.length - 1];
        const curr = words[i];

        // two words sorted form defarence
        const sortedPrev = prev.split('').sort().join('');
        const sortedCurr = curr.split('').sort().join('');

        if(sortedPrev !== sortedCurr){
            result.push(curr);
        }
    }
    return result;
};