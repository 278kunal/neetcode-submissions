class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * O(log N) O(1)
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
