export class Queue<T> {
  private storage: T[] = [];

  enqueue(item: T) {
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  // Returns the number of elements in the queue
  size(): number {
    return this.storage.length;
  }

  // Returns true if the queue is empty
  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  // Returns the front element without removing it
  peek(): T | undefined {
    return this.storage[0];
  }
}
