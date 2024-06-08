// Overloaded function signatures
function sendMessage(content: string): void; // Text message
function sendMessage(content: { html: string }): void; // HTML message

// Unified function implementation
function sendMessage(content: string | { html: string }): void {
  if (typeof content === "string") {
    console.log("Sending text message:", content);
  } else {
    console.log("Sending HTML message:", content.html);
  }
}

// Usage examples
sendMessage("Hello, world!"); // Should log: Sending text message: Hello, world!
sendMessage({ html: "<p>Hello, world!</p>" }); // Should log: Sending HTML message:  <p>Hello, world!</p>
