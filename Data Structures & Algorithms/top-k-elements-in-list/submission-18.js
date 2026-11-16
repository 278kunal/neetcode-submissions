class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        const result = [];

        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (let n in count) {
            freq[count[n]].push(parseInt(n)); 
        }

        for (let j = freq.length - 1; j > 0; j--) {
            for (const n of freq[j]) {
                result.push(n);
                if (result.length === k)
                    return result;
            }
        }

        return result;
    }
}
