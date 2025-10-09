// Find the Minimum Amount of Time to Brew Potions

/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function (skill, mana) {
  const n = skill.length;
  const m = mana.length;
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  // Base case: first wizard
  dp[0][0] = skill[0] * mana[0];
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + skill[0] * mana[j];
  }

  //   Base case: first option
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + skill[i] * mana[0];
  }

  // Fill the dp table
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + skill[i] * mana[j];
    }
  }

  return dp[n - 1][m - 1];
};
