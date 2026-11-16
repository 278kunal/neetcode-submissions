class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // create map of s for all char counts by traversing s
    // traverse t for every char delete its occurance from s map if there
    // in the end if s map is empty then both are anagram else not
    // T:- O(s + t) S:- O(s)
    // a, ab
    // racecar, carrace
    // ab, a

    buildStringMap(s) {
        const sMap = new Map();
        for (let i = 0; i < s.length; i++) {
            const sChar = s.charAt(i);
            if (sMap.has(sChar)) {
                sMap.set(sChar, sMap.get(sChar) + 1);
            } else {
                sMap.set(sChar, 1);
            }
        }
        return sMap;
    }

    compareMaps(map1, map2) {
        let isEqual = true;

        for (const [key, value] of map1) {
            if (map2.get(key) !== value) {
                isEqual = false;
                break;
            }
        }

        return isEqual;
    }

    isAnagram(s, t) {
        const sMap = this.buildStringMap(s);
        const tMap = this.buildStringMap(t);

        if (sMap.size !== tMap.size) {
            return false;
        } else {
            return this.compareMaps(sMap, tMap);
        }
    }
}
