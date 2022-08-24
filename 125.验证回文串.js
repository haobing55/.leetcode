/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
    var  isPalindrome= function(s) {
    var start = 0
    var end = s.length - 1
    while (start < end) {
        var l = s.charCodeAt(start)
        var e = s.charCodeAt(end)
        if (!isLetter(l)) {
            start++
            continue
        }
        if (!isLetter(e)) {
            end--
            continue
        }    
        if (toLowerCase(l) !== toLowerCase(e)) {
            return false 
        } 
        start++
        end--
  }
  return true

};
var isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

var toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}

// @lc code=end

