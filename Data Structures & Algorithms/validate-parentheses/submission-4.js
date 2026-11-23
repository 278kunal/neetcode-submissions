class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let c of s) {
            if (["(", "[", "{"].includes(c)) {
                stack.push(c);
            } else if (c === "}" || c === "]" || c === ")") {
                if (stack.length === 0) return false;

                if (
                    (stack[stack.length - 1] === "{" && c !== "}") ||
                    (stack[stack.length - 1] === "[" && c !== "]") ||
                    (stack[stack.length - 1] === "(" && c !== ")")
                ) {
                    return false
                }

                stack.pop();
            }
        }

        return stack.length === 0 ? true : false;
    }
}
