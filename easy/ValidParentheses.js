tests = [
    "()",
    "()[]{}",
    "(]"
]

const isValid = (s) => {
    let stack = [];
    const rightHandClosures = ')]}';
    const CLOSURES = {
        '(':')',
        '[':']',
        '{':'}'
    };

    for (const char of s) {
        if (rightHandClosures.includes(char)) {
            if (stack.length === 0 || CLOSURES[stack.pop()] !== char) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }

    return stack.length <= 0;
}

tests.forEach(test => console.log(isValid(test)));

// Runtime 88ms     70.74 Percentile
// Memory 42.5MB    61.60 Percentile
