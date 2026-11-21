class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        let palindrome = true;

        while (start < end) {
            if (!this.isAlphanumeric(s.charAt(start))) {
                start++;
            } else if (!this.isAlphanumeric(s.charAt(end))) {
                end--;
            } else if (s.charAt(start).toLowerCase() !== s.charAt(end).toLowerCase()) {
                palindrome = false;
                break;
            } else {
                start++;
                end--;
            }
        }
        return palindrome;
    }
}
