class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    //[1, 1, 2, 8]
    //[48, 24, 6, 1]
    productExceptSelf(nums) {
        const prefixSums = [];
        const suffixSums = [];
        const result = [];

        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            prefixSums[i] = product;
            product = product * nums[i];
        }
        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixSums[i] = product;
            product = product * nums[i];
        }

        for (let i = 0 ; i < nums.length; i++) {
            result[i] = prefixSums[i] * suffixSums[i];
        }

        return result;
    }
}
