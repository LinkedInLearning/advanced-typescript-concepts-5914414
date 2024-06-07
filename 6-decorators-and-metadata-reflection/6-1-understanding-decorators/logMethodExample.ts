function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const finish = performance.now();
    console.log(`${key} executed in ${finish - start} milliseconds`);
    return result;
  };
  return descriptor;
}

class MathOperations {
  //@logMethod
  add(x: number, y: number): number {
    return x + y;
  }
}

const math = new MathOperations();
math.add(5, 3);  // Output: "add executed in X milliseconds"
