class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * O(log N) O(1)
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
