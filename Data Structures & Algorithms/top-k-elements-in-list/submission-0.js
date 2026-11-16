class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (numsMap.has(num)) {
                numsMap.set(num, numsMap.get(num) + 1)
            } else {
                numsMap.set(num, 1);
            }
        }

        const numsQueue = new MaxPriorityQueue((num) => num.count);

        for (const [key, value] of numsMap) {
            numsQueue.enqueue({num: key, count: value})
        }

        while(k--) {
            result.push(numsQueue.dequeue().num);
        }

        return result;
    }
}
