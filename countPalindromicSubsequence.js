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


  
};
