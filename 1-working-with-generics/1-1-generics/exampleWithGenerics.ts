function printSomething<Type>(arg: Type): Type {
  console.log(arg);
  return arg;
}

let someValue = printSomething<string>("something");
// let someValue2 = printSomething<string>(3);
let someValue3 = printSomething("some other thing");















const printResult = printSomething<string>("Hello World!");

function printSomething2<T, U, V>(arg1: T, arg2: U): V {
  // some body that logically results in a value of type V
  // This is a placeholder example. Real implementation depends on the specific logic needed.
  let result: any;

  // Logic that assigns a properly typed value to 'result'
  // ...

  return result as V; // Type assertion to V, should be avoided if possible without proper guarantees
}

const resultPrint2 = printSomething2<string, number, string>("Dilshod", 2005);

function combine<T, U, V>(first: T, second: U, callback: (a: T, b: U) => V): V {
  return callback(first, second);
}

const result = combine<string, number, string>(
  "Dilshod",
  2005,
  (name, age) => `Hello ${name}, your birth year is ${age}`,
);

console.log(result);

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const filteredArray = getFirst<number>([0, 1, 2, 3, 4]);

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const strings = [12, 3, 432];
const numbers = [0, 2, 4, 6];

const margeArrayResult = mergeArrays<number>(strings, numbers);
