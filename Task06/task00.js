class Calculator {
    constructor(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('Invalid number');
        }
        this.x = x;
        this.y = y;
    }

    setX(num) {
        if (typeof num !== 'number') {
            throw new Error('Invalid number');
        }
        this.x = num;
    }

    setY(num) {
        if (typeof num !== 'number') {
            throw new Error('Invalid number');
        }
        this.y = num;
    }

    logSum() {
        console.log(this.x + this.y);
    }

    logMul() {
        console.log(this.x * this.y);
    }

    logSub() {
        console.log(this.x - this.y);
    }

    logDiv() {
        if (this.y === 0) {
            throw new Error('Cannot divide by zero');
        }
        console.log(this.x / this.y);
    }
}
