/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var zeroStartIdx=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++;
        }
    }
    return zeroStartIdx;
    

};
// @lc code=end

