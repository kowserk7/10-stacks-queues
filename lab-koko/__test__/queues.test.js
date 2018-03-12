'use strict';

const Queue = require('../lib/queues');

describe('Queue Module', () => {
  beforeEach(() => this.queue = new Queue());
  describe('#Properties', () => {
    it('should validate an object', () => {
      expect(this.queue).toBeInstanceOf(Object);
    });
    it('should have a maximum size of 1048', () => {
      expect(this.queue.maxSize).toEqual(1048);
    });
    it('should have null values for the constructor', () => {
      expect(this.queue.top).toBeNull();
      expect(this.queue.bottom).toBeNull();
    });
    it('should have a value of 0 for the size', () => {
      expect(this.queue.size).toEqual(0);
    });
  });
  describe('#Enqueue', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toBe(20);
    });
    it('should add a new node with the val of 1 to the bottom of the queue', () => {
      this.queue.enqueue(1);
      expect(this.queue.bottom.val).toBe(1);
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('#Dequeue', () => {
    it('should remove the node from the queue', () => {
      this.queue.enqueue(4);
      this.queue.enqueue(5);
      this.queue.enqueue(6);
      expect(this.queue.size).toEqual(3);
      this.queue.dequeue();
      expect(this.queue.size).toEqual(2);
    });
  });
});
