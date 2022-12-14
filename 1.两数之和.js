/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
// @lc code=start
/**
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // keys --> { '数字' : 数字下标 }
    var keys = {};
    for(var i = 0, j = nums.length; i < j; i++) {
        var diff = target - nums[i];
        // 判断差值diff在键值对中是否 存在 是则找到匹配数字
        if(!isNaN(keys[diff])) {
            return [keys[diff], i];
        }
        // 未出现匹配值 将数字存入键值对中以备后续判断
        keys[nums[i]] = i;
    }
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end