/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev, curr) => prev ^ curr);

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end