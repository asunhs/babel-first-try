let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }
            }
        }
    }
}


function run() {
    /**
     * Symbol?
     */
    console.group('for..of 피보나치');
    for (var n of fibonacci) {
        // truncate the sequence at 1000
        if (n > 1000)
            break;
        console.log(n);
    }
    console.groupEnd();
}

export default run;