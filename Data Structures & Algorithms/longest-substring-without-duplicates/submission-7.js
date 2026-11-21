class Solution {
    /**
     * @param {string} s
     * @return {number}
     * "abbacdefghcade" //8
     *  O(n), O(n)
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0;
        if (s.length === 1) return 1;

        let start = 0;
        let end = 1;
        let windowMap = new Map();
        let maxLength = 1;
        windowMap.set(s.charAt(start), 1);
        let localLength = 1;

        while(start <= end && end <= s.length - 1) {
            if (!windowMap.has(s.charAt(end))) {
                windowMap.set(s.charAt(end), 1);
                end++;
                localLength++;
            } else {
                while(windowMap.has(s.charAt(end))) {
                    windowMap.set(s.charAt(start), windowMap.get(s.charAt(start)) - 1);
                    if (windowMap.get(s.charAt(start)) === 0) {
                        windowMap.delete(s.charAt(start))
                    }
                    start++;
                    localLength--;
                }
            }
            maxLength = Math.max(maxLength, localLength);
        }
        return maxLength;
    }
}
