type InputType = "text" | "number";
type Reply<Type extends InputType> = Type extends "text" ? string[] : number[];

function processInput<Type extends InputType>(type: Type, input: Reply<Type>) {
  console.log(`Processing ${type} input: `, input);
}

processInput("text", ["Hello", "World"]);  // Correctly typed as string[]
processInput("number", [1, 2, 3]);  // Correctly typed as number[]
