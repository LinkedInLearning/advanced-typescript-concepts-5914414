
function processData(data: unknown): void {
  if (typeof data === 'string') {
    console.log("String data:", data);
  } else if (typeof data === 'number') {
    console.log("Number data:", data);
  } else if (Array.isArray(data)) {
    console.log("Array data with length " + data.length + ":", data);
  } else if (typeof data === 'object' && data !== null) {
    console.log("Object data:", data);
  } else if (data === null) {
    console.log("Null data");
  } else {
    console.log("Unhandled type of data:", data);
  }
}

// Example usage
processData("Hello, TypeScript!");
processData(12345);
processData([1, 2, 3, 4, 5]);
processData({ name: "Alice", age: 30 });
processData(null);
processData(undefined);
