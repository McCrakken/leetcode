/**
 * @param {string[]} strs
 * @return {string}
 **/
/**
 *  A comparison for an array of strings
 *  Looks for the longest stretch of letters that are shared by the beginning of all words
 *  Must compare all elements of the array
 *
 */
const test1 = ["flower","flow","flight"];                   // "fl"
const test2 = ["dog","racecar","car"];                      // ""
const test3 = ["a"];                                        // "a"
const test4 = ["ab", "a"];                                  // "a"
const test5 = ['flower', 'flower', 'flower', 'flower'];     // "flower"

const longestCommonPrefix = (strings) => {
    let prefix = '';
    if (strings.length === 0) {
        return prefix;
    }

    const compareString = strings.pop();

    if (strings.length === 0) {
        return compareString;
    }

    for (let i = 0; i <= compareString.length; i++) {
        const tempPrefix =compareString.slice(0, i);

        if (strings.every((current) => current.indexOf(tempPrefix) === 0)) {
            prefix = tempPrefix;
        }
    }

    return prefix;
}

console.log('test1: ', longestCommonPrefix(test1));
console.log('test2: ', longestCommonPrefix(test2));
console.log('test3: ', longestCommonPrefix(test3));
console.log('test4: ', longestCommonPrefix(test4));
console.log('test5: ', longestCommonPrefix(test5));

// Runtime: 71ms, 90.91 Percentile
// Memory:  42.5MB, 57.42 Percentile