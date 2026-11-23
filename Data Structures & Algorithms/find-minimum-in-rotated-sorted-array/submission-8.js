class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * // [1,2,3,4,5,6,7]
     * // [7,1,2,3,4,5,6]
     * // [6,7,1,2,3,4,5]
     * // [5,6,7,1,2,3,4]
     * // [4,5,6,7,1,2,3]
     * // [3,4,5,6,7,1,2]
     * // [2,3,4,5,6,7,1]
     */
    findMin(nums) {
        return this.binarySearch(nums, 0, nums.length - 1);
    }

    binarySearch(nums, l, r) {
        if (nums[l] <= nums[r]) {
            return nums[l];
        }

        const mid = Math.floor((l + r) / 2);

        if (nums[mid] >= nums[l]) {
            return this.binarySearch(nums, mid + 1, r);
        } else {
            return this.binarySearch(nums, l, mid);
        }
    }
}
