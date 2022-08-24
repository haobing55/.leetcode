/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 */
var searchInsert = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1)
};
function binarySearch(array, target, start, end) {
    if (start > end) return start;
    const midPoint = Math.floor((start + end) / 2);
    if (array[midPoint] === target) return midPoint;
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end