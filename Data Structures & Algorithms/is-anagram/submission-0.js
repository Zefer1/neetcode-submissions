class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */


    isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = {};

    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char] = freq[char] + 1;
        }
    }

    
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (freq[char] === undefined || freq[char] === 0) {
            return false; 
        }
        freq[char] = freq[char] - 1;
    }

    return true;
}



}
