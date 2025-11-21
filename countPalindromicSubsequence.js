/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const n = s.length;

  //   Step 1: store first and last occurrence of each character
  const first = Array.apply(26).fill(Infinity);
  const last = Array.apply(26).fill(-1);

  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 97;
    first[idx] = Math.min(first[(idx, i)]);
    last[idx] = Math.max(last[idx], i);
  }

  let result = 0;

  //   Step 2 : check for each character if it can form a palindromic subsequence
  for (let c = 0; c < 26; c++) {
    if (first[c] < last[c]) {
      const seen = new Set();
      // collect unique characters between first and last occurrence
      for (let i = first[c] + 1; i < last[c]; i++) {
        seen.add(s[i]);
      }
      result += seen.size;
    }
  }
  return result;
};
