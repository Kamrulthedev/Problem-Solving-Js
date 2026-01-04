/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    // Optimization: large n always converges to 1
    if (n >= 4800) return 1.0;

    n = Math.ceil(n / 25);
    const dp = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(-1)
    );

    function solve(a, b) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;

        if (dp[a][b] !== -1) return dp[a][b];

        dp[a][b] = 0.25 * (
            solve(a - 4, b) +
            solve(a - 3, b - 1) +
            solve(a - 2, b - 2) +
            solve(a - 1, b - 3)
        );

        return dp[a][b];
    }

    return solve(n, n);
};
