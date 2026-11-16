class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // T:- O(s + t) S:- O(1)
    // a, ab
    // racecar, carrace
    // ab, a

    isAnagram(s, t) {
        if (s.length !== t.length)
            return false;
        
        let isAnagram = true;
        const charCounts = Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            const sCharIndex = s.charAt(i).charCodeAt() - 97;
            charCounts[sCharIndex]++;
            const tCharIndex = t.charAt(i).charCodeAt() - 97;
            charCounts[tCharIndex]--;
        }

        for (let i = 0; i < charCounts.length; i++) {
            if (charCounts[i] !== 0) {
                isAnagram = false;
                break;
            }
        }

        return isAnagram;
    }
}
