class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // taking two strings at a time check for anagram
    // if not anagram push both are separate keys of map with value as that string { "act": ["act"],      //pots: ["pots"]}
    // if anagram then we push this value inside array.
    getCountArrayString(str1) {
        const charCounts = Array(26).fill(0);

        for (let i = 0; i < str1.length; i++) {
            const str1CharIndex = str1.charAt(i).charCodeAt(0) - 97;
            charCounts[str1CharIndex] = charCounts[str1CharIndex] + 1;
        }

        return charCounts.join("-");
    }

    groupAnagrams(strs) {
        const anagramMap = new Map();
        const result = [];

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const strCharCountArrayString = this.getCountArrayString(str);
            if (anagramMap.has(strCharCountArrayString)) {
                anagramMap.set(strCharCountArrayString, [
                    ...anagramMap.get(strCharCountArrayString),
                    str,
                ]);
            } else {
                anagramMap.set(strCharCountArrayString, [str]);
            }
        }

        for (const [_, value] of anagramMap) {
            result.push(value);
        }

        return result;
    }
}
