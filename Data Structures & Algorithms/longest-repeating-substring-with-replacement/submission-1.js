class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * "XBCDAFGAIJK" k = 2
     */
    getMostFreqCount(mp) {
        let maxCount = 0;

        for (const[_, value] of mp) {
            if (value >= maxCount) {
                maxCount = value;
            }
        }

        return maxCount;
    }

    characterReplacement(s, k) {
        let l = 0, r = 0, res = 0, mp = new Map();

        mp.set(s[l], 1);

        while (l <= r && r < s.length) {
            const windowLen = r - l + 1;

            if (windowLen - this.getMostFreqCount(mp) <= k) {
                r++;
                mp.set(s[r], (mp.get(s[r]) || 0) + 1);
                if (windowLen > res) {
                    res = windowLen;
                }
            } else {
                mp.set(s[l], (mp.get(s[l]) || 0) - 1);
                l++;
            }
        }

        return res;
    }
}
