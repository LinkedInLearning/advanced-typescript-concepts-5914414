function logMethod<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
) {
  const methodName = String(context.name);

  return function (this: This, ...args: Args) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const finish = performance.now();

    console.log(`${methodName} executed in ${finish - start} milliseconds`);

    return result;
  };
}

class MathOperations {
  @logMethod
  add(x: number, y: number): number {
    return x + y;
  }
}

const math = new MathOperations();
math.add(5, 3); // Output: "add executed in X milliseconds"
