let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

console.log(strLength); // Outputs the length of "someValue"

let someValue2: any = "this is another string";

let strLength2: number = (<string>someValue).length;

console.log(strLength2); // Outputs the length of "someValue"
