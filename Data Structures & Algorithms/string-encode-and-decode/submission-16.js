class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //[",'-+31D0","1, -=$3qe"]
    //"8#,'-+31D0"
    // O(n) O(1)
    encode(strs) {
        let encodedString = '';

        for (const str of strs) {
            const strLength = str.length;
            encodedString = encodedString + `${strLength}#${str}`
        }

        console.log(encodedString);

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //O(n) O(m+s)
    decode(str) {
        if (!str.length) return [];

        const decodedString = [];

        let nextStringLength = '';

        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);

            if (char !== '#') {
                nextStringLength += char;
            } else {
                decodedString.push(str.substring(i + 1, parseInt(nextStringLength) + i + 1));
                i = parseInt(nextStringLength) + i;
                nextStringLength = '';
            }
        }
        

        return decodedString;
    }
}
