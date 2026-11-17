class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //[",'-+31D0","1, -=$3qe"]
    //",'-+31D0∑1, -=$3qe"
    encode(strs) {
        let encodedString = '';

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i] === "" ? "Ω" : strs[i];
            if (i === strs.length - 1) {
                encodedString = encodedString + str;
            } else {
                encodedString = encodedString + str + "∑";
            }
        }
        console.log(encodedString);

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str.length) return [];
        
        const decodedString = [];
        let currentString = '';

        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);
            if (char === "∑") {
                decodedString.push(currentString);
                currentString = '';
            } else if (char === "Ω") {
                currentString = "";
            } else {
                currentString = currentString + char;
            }
        }

        decodedString.push(currentString);

        return decodedString;
    }
}
