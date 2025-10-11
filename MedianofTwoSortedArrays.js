/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length, n = nums2.length;
    let left = 0, right = m;
    let totalLeft = Math.floor((m + n + 1) / 2);

    while (left <= right) {
        let i = Math.floor((left + right) / 2);  // partition for nums1
        let j = totalLeft - i;                   // partition for nums2

        let left1 = i > 0 ? nums1[i - 1] : -Infinity;
        let right1 = i < m ? nums1[i] : Infinity;
        let left2 = j > 0 ? nums2[j - 1] : -Infinity;
        let right2 = j < n ? nums2[j] : Infinity;

        if (left1 <= right2 && left2 <= right1) {
            // Correct partition found
            if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            right = i - 1; // move left
        } else {
            left = i + 1;  // move right
        }
    }

    return 0; // fallback (should not reach here)
};



console.log(findMedianSortedArrays([1, 3], [2])); 
// ✅ Output: 2

console.log(findMedianSortedArrays([1, 2], [3, 4]));
// ✅ Output: 2.5