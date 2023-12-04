/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0, j = 0;
    let m = s.length, n = t.length;
    // if (n < m) return false
    while (j < n) {
        if (s[i] === t[j]) {
            i++; j++;
        } else {
            j++;
        }
    }
    if (i < m) return false;

    return true;
};