function sendMessage(content: any): void {
  if (typeof content === "string") {
    console.log("Sending text message:", content);
  } else {
    console.log("Sending HTML message:", content.html);
  }
}

// Usage examples
sendMessage("Hello, world!"); // Sends a text message
sendMessage({ html: "<p>Hello, world!</p>" }); // Sends an HTML message
