class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // create a map of nums storing count of each num
    // if map has no entry make entry, if map has entry then we already found our solution we break
    // Above is T:- O(n), S:- O(n) for worse, O(1) for best
    hasDuplicate(nums) {
        const map = new Map();
        let isDuplicatePresent = false;
    
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]
            if (map.has(value)) {
                isDuplicatePresent = true;
                break;
            } else {
                map.set(value, 1);
            }
        }

        return isDuplicatePresent;
    }
}
