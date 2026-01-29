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

    // build graph
    for (let i = 0; i < original.length; i++) {
        const u = original[i].charCodeAt(0) - 97;
        const v = changed[i].charCodeAt(0) - 97;
        dist[u][v] = Math.min(dist[u][v], cost[i]);
    }

     // Floyd–Warshall
    for (let k = 0; k < N; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // calculate total cost
    let ans = 0;
    for (let i = 0; i < source.length; i++) {
        const s = source[i].charCodeAt(0) - 97;
        const t = target[i].charCodeAt(0) - 97;

        if (dist[s][t] === INF) return -1;
        ans += dist[s][t];
    }
};