class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * [2,3,4,5,6,1]
     * [3,4,5,6,1,2]
     * [5,6,1,2,3,4]
     * [6,1,2,3,4,5]
     */
    search(nums, target) {
        const j = this.findDeflectionPoint(nums);

        if (nums[j] === target) {
            return j;
        } else if (target >= nums[j] && target <= nums[nums.length - 1]) {
            return this.binarySearch(nums, j, nums.length - 1, target);
        } else {
            return this.binarySearch(nums, 0, j - 1, target);
        }
    }

    findDeflectionPoint(nums) {
        let l = 0, r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] < nums[r]) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }

    binarySearch(nums, l, r, target) {
        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] === target) {
                return m;
            } else if (target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return -1;
    }
}
