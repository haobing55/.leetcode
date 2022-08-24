/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
        digits[i]++; 
       if(digits[i] > 9){
           digits[i] = 0;
       }else{
           return digits;
       }
   }
   digits.unshift(1);
   return digits;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end