/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let rigth = 0; rigth < s.length; rigth++) {
    while (set.has(s[rigth])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[rigth]);
    maxLen = Math.max(maxLen, rigth - left + 1);
  }
  return maxLen;
};
