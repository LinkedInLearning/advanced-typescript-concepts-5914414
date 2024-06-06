type World = "world";
type Greeting = `Hello, ${World}`;  // "Hello, world"
 
type Result = "success" | "error";
type Message<StatusType extends Result> = `${StatusType}_message`;

type SuccessMessage = Message<"success">;  // "success_message"
type ErrorMessage = Message<"error">;  // "error_message"
