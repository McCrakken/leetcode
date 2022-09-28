/**
 * @param {number} x
 * @return {boolean}
 */

const testNumbers = [121, -121, 10];

const isPalindrome = (n) => {
    if (n < 0) {
        return false;
    }
    let nString = n.toString();
    while (nString.length > 0) {
        if (nString[0] !== nString[nString.length - 1])
            return false;
        else
            nString = nString.slice(1, -1);
    }

    return true;
}

testNumbers.forEach(num => {
    console.log(num.toString(), isPalindrome(num));
})

/**
 * Runtime: 354ms           19.40 Percentile
 * Memory Usage: 50.7 MB    75.36 Percentile
 **/