const Node = require('./node');

module.exports =  class Queue {

  constructor(maxSize= 1048) {
    this.maxSize = maxSize;
    this.size = 0;
    this.top = null;
    this.bottom = null;
  } 

  enqueue(value) {
    if (this.size === this.maxSize) throw new Error ('Queue overflow!');
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    if (!this.end) this.bottom = node;
    this.size++;
    return this;
  }

  dequeue() {
    let newTop = this.top;
    this.top = this.top.next;
    newTop.next = null;
    this.size --;
    return newTop;
  }
};
