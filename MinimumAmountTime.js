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
        // If S < 0, earliest can be 0 — but the formula already yields <=0 possible.
        if (S < 0n) S = 0n;

        // Update F[i] = S + mj * pre[i+1] (finish time on wizard i for current potion)
        for (let i = 0; i < n; i++) {
            F[i] = S + mj * pre[i+1];
        }
    }

    // F[n-1] is the final finish time (BigInt)
    const ansBig = F[n-1];

    // Return as Number if safe, else return Number(ansBig) may lose precision.
    // LeetCode expects a Number; if values are too big for Number safe precision,
    // returning a BigInt as string is not accepted by judge — but in practice
    // constraints usually fit in 64-bit signed integer. We'll convert to Number.
    // If you worry about >2^53-1, you can return ansBig (BigInt) - check judge expectations.
    const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
    if (ansBig <= MAX_SAFE) {
        return Number(ansBig);
    } else {
        // If beyond Number.MAX_SAFE_INTEGER, still return Number(ansBig) (possible precision loss)
        // or convert to string if the judge accepts string; typical LeetCode JS expects Number.
        // Here we return Number(ansBig) for compatibility.
        return Number(ansBig);
    }
};
