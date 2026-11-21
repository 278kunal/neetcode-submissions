class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * [-1,0,1,2,-1,-4]
     * [-4,-1,-1,0,1,2]
     * [-3,-3,-3,1,2,3,4]
     */
    threeSum(nums) {
        const result = [];
        const numsSorted = nums.toSorted((a, b) => a - b);

        for (let i = 0; i < numsSorted.length; i++) {
            if (numsSorted[i] > 0) break;
            if (i > 0 && numsSorted[i] === numsSorted[i - 1]) continue;

            let start = i + 1;
            let end = numsSorted.length - 1;

            while(start < end) {
                const sum = numsSorted[i] + numsSorted[start] + numsSorted[end];
                if (sum === 0) {
                    result.push([numsSorted[i], numsSorted[start], numsSorted[end]]);
                    start++;
                    end--;
                    while (start < end && numsSorted[start] === numsSorted[start - 1]) {
                        start++;
                    }
                } else if (sum > 0) {
                    end--;
                } else {
                    start++;
                }
            }
        }

        return result;
    }
}
