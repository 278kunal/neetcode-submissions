class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const result = [];

        //O(s)
        // {1: 1, 2: 2, 3: 2}
        for (const n of nums) {
            counts[n] = (counts[n] || 0) + 1;
        }
        
        // [0,   1,   2 ,  3 ]
        // [[], [1], [2], [3]]
        for (const c in counts) {
            freq[counts[c]].push(parseInt(c));
        }


        for (let i = freq.length - 1; i > 0; i--) {
            const freqKArray = freq[i];
            for (const n of freqKArray) {
                if (result.length === k) {
                    return result;
                } else {
                    result.push(n);
                }
            }
        }

        return result;
    }
}
