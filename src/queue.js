const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node')
// const { ListNode } = require('../extensions/list-node.js');

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
  res = null
  
  getLastElement(value){
    if(value.next !== null){
      return this.getLastElement(value.next)
    }
    else{
      return value
    }
  }

  getUnderlyingList() {
    return this.res
  }

  enqueue(value) {
    if(this.res === null){
      this.res = new ListNode(value)
    }
    else{
      this.getLastElement(this.res).next = new ListNode(value)
    }
  }

  dequeue() {
    const _ = this.res
    this.res = this.res.next
    return _.value
}
  }

module.exports = {
  Queue
};
