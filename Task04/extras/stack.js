class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.length -= 1;
        if (this.isEmpty()) {
            this.bottom = null;
        }
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}
