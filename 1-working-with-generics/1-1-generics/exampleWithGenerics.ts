function printSomething<Type>(arg: Type): Type {
  console.log(arg);
  return arg;
}


function printSomething2<T, U, V>(arg1: T, arg2: U): V {
  // some body that logically results in a value of type V
  // This is a placeholder example. Real implementation depends on the specific logic needed.
  let result: any;

  // Logic that assigns a properly typed value to 'result'
  // ...

  return result as V; // Type assertion to V, should be avoided if possible without proper guarantees

}


function getFirst<T>(arr: T[]): T {
  return arr[0];
}

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
