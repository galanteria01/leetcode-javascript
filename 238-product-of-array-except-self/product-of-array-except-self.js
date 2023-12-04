/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let pre = [], suff = [], res = [];
    let val = 1, i = 0;
    let n = nums.length
    for (i = 0; i < n; i++) {
        pre.push(val);
        val = val * nums[i]
    }
    val = 1;
    for (let i = n - 1; i >= 0; i--) {
        suff.push(val);
        val = val * nums[i]
    }
    suff.reverse()
    for (i = 0; i < n; i++) {
        res.push(suff[i] * pre[i])
    }
    return res;
};