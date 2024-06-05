import { Queue } from './Queue';

const queue = new Queue<string>();
queue.enqueue("Hello");
queue.enqueue("World");
queue.enqueue("TypeScript");

console.log(queue.peek());    // Outputs: "Hello"
console.log(queue.size());    // Outputs: 3
console.log(queue.isEmpty()); // Outputs: false

while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}
// Outputs:
// Hello
// World
// TypeScript
console.log(queue.isEmpty()); // Outputs: true
