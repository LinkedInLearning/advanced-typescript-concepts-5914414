function isString(test: any): test is string {
  return typeof test === "string";
}

function example(input: string | number) {
  if (isString(input)) {
    console.log("It's a string!", input.toUpperCase()); // Safe to call toUpperCase
  } else {
    console.log("It's a number!", input.toFixed(2)); // Safe to call toFixed
  }
}

// Usage
example("Hello, TypeScript!");
example(42);
