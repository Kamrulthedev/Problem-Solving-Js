/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const INF = 1e15;
    const N = 26;

        // dist[i][j] = min cost to convert char i -> j
    const dist = Array.from({ length: N }, () => Array(N).fill(INF));

     // same char cost = 0
    for (let i = 0; i < N; i++) dist[i][i] = 0;
};