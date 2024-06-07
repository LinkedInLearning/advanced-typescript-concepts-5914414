function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
  if (typeof value === "string") {
    return `Hello, ${value}!`;
  } else {
    return `You are ${value} years old.`;
  }
}

// Usage
console.log(greet("Kareema")); // Output: "Hello, Kareema!"
console.log(greet(32));      // Output: "You are 22 years old."
