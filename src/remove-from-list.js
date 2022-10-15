const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');
let _ = new ListNode(0)
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value !== k)
      getLastElement(_).next = new ListNode(l.value)

  if (l.next !== null) {
      return removeKFromList(l.next, k)
  }
  else {
    const result = Object.assign({}, _.next)
    _ = new ListNode(0)
    return result
  }
}

function getLastElement(value){
  if(value.next !== null){
    return getLastElement(value.next)
  }
  else{
    return value
  }
}

module.exports = {
  removeKFromList
};
