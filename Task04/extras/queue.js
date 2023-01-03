class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length += 1;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.first.value;
        this.first = this.first.next;
        this.length -= 1;
        if (this.isEmpty()) {
            this.last = null;
        }
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.first.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}
