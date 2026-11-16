class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // T:- O(n), S:- O(n)
    twoSum(nums, target) {
        const map = new Map();
        const result = [];

        for (let i = 0; i < nums.length ; i++) {
            const num = nums[i];
            const complement = target - num;

            if (map.has(complement)) {
                result.push(map.get(complement), i);
            } else {
                map.set(num, i);
            }
        }

        return result;
    }
}
