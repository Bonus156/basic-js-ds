const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.node = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.node = new ListNode(value)
    } else {
      let current = this.node;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    };
    this.length++;
  }

  dequeue() {
    let current = this.node;
    this.node = current.next;
    this.length--;
    return current.value;
  }
}


module.exports = {
  Queue
};
