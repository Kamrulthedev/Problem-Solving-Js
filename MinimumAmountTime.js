/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const n = skill.length;
    const m = mana.length;
    // Convert to BigInt for safety (avoid 2^53-1 precision issues)
    const skillB = skill.map(x => BigInt(x));
    const manaB = mana.map(x => BigInt(x));

    // prefix sums of skills: pre[i] = sum_{k< i} skill[k]  (pre[0]=0)
    const pre = new Array(n + 1).fill(0n);
    for (let i = 0; i < n; i++) pre[i+1] = pre[i] + skillB[i];

    // F[i] = finish time on wizard i after scheduling previous potions
    const F = new Array(n).fill(0n);

    for (let j = 0; j < m; j++) {
        const mj = manaB[j];
        // Compute S = max_i (F[i] - mj * pre[i])
        let S = (F[0] - mj * pre[0]);
        for (let i = 1; i < n; i++) {
            const cand = F[i] - mj * pre[i];
            if (cand > S) S = cand;
        }
        if (S < 0n) S = 0n;
        for (let i = 0; i < n; i++) {
            F[i] = S + mj * pre[i+1];
        }
    }
    const ansBig = F[n-1];
    const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
    if (ansBig <= MAX_SAFE) {
        return Number(ansBig);
    } else {
        return Number(ansBig);
    }
};
