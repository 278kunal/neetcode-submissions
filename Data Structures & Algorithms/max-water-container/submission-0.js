class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * [1,2,3,7,4,9,0,1,2,9,1,2,4] 42
     *  4 * 9 = 36
     *  7 * 6 = 42
     *  12 * 4 = 48
     * 9 - 0
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let globalMax = -1;

        while (i < j) {
            let localMax = (j - i) * Math.min(heights[j], heights[i]);
            if (heights[i] < heights[j]) {
                i++
            } else {
                j--;
            }
            if (localMax > globalMax) {
                globalMax = localMax;
            }
        }
        return globalMax;
    }
}
