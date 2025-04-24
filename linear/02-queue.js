class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(item) {
    // O(1)
    this.list.push(item);
  }

  dequeue() {
    // O(n)
    if (this.isEmpty()) {
      throw new Error("This queue is empty.");
    }

    return this.list.shift();
  }

  peek() {
    // O(1)
    if (this.isEmpty()) {
      throw new Error("This queue is empty.");
    }

    return this.list[0];
  }

  isEmpty() {
    // O(1)
    return this.list.length === 0;
  }

  size() {
    // O(1)
    return this.list.length;
  }

  print() {
    // O(n)
    console.log(this.list.join(" -> "));
  }
}

// Example usage:
const queue = new Queue(); // FIFO
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
