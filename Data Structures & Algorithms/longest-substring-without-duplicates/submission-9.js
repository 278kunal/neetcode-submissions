class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const characterSet = new Set();
        let l = 0;
        let max = 0;

        for (let r = 0; r < s.length; r++) {
            while (characterSet.has(s[r])) {
                characterSet.delete(s[l]);
                l++;
            }
            characterSet.add(s[r]);
            max = Math.max(max, r - l + 1);
        }

        return max;
    }
}
