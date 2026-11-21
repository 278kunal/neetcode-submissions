class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (let n of nums) {
            if (!set.has(n - 1)) {
                let length = 1;
                let i = 1;
                while (set.has(n + i)) {
                    length++;
                    i++
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
