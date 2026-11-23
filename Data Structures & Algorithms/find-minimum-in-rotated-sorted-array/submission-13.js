class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * O(log N) O(1)
     * [3,4,5,6,1,2]
     * l = 0, r = 5
     * m = 2, l = 3, r = 5
     * m = 4, l = 3, r = 4
     * m = 3, l = 4
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] < nums[r]) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return nums[l];
    }
}
