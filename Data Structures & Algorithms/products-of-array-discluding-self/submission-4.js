class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    //[1, 1, 2, 8]
    //[48, 24, 6, 1]
    // T:- O(n) S:- O(1)
    productExceptSelf(nums) {
        const result = [];

        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = product;
            product = product * nums[i];
        }
        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * product;
            product = product * nums[i];
        }

        return result;
    }
}
