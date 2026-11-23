class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * O(log n), O(1)
     */
    search(nums, target) {
        // O(log N)
        const j = this.findDeflectionPoint(nums);

        if (nums[j] === target) {
            return j;
        } else if (target >= nums[j] && target <= nums[nums.length - 1]) {
            // O(log N)
            return this.binarySearch(nums, j, nums.length - 1, target);
        } else {
            // O(log N)
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
