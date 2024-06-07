let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;  // still OK, type is unknown

// Compile-time error: Object is of type 'unknown'
// console.log(notSure.length);

// Using a type assertion
if (typeof notSure === "string") {
  console.log(notSure.length);  // Now it's safe to access 'length'
}
