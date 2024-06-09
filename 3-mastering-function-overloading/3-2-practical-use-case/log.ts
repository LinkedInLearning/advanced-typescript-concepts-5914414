function log(message: string): void;
function log(error: Error): void;
function log(message: string, error: Error): void;
function log(param1: string | Error, param2?: Error): void {
  if (typeof param1 === 'string' && param2 instanceof Error) {
    console.error(`Error: ${param1}`, param2);
  } else if (param1 instanceof Error) {
    console.error(param1);
  } else {
    console.log(param1);
  }
}

// Usage
log("User login successful.");
log(new Error("Failed to connect to database."));
log("User request failed.", new Error("Session timeout"));