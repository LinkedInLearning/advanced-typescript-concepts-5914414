function formatDate(date: Date): string;
function formatDate(isoString: string): string;
function formatDate(input: Date | string): string {
  if (input instanceof Date) {
    return input.toLocaleDateString();
  } else {
    const date = new Date(input);
    return date.toLocaleDateString();
  }
}

// Usage
console.log(formatDate(new Date())); // Outputs current date in local format
console.log(formatDate("2024-01-01T14:20:00Z")); // Outputs "1/1/2024" 
