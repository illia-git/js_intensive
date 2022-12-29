const myIterable = {
    from: 1,
    to: 5,
    constructor(from, to) {
        this.from = from;
        this.to = to;
    },
    [Symbol.iterator]: function () {
        let current = this.from;
        const last = this.to;

        if (typeof current !== 'number' || typeof last !== 'number') {
            throw new Error('');
        }
        if (last < current) {
            throw new Error('');
        }

        return {
            next() {
                if (current <= last) {
                    return {value: current++, done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};
