import { Printer } from './Printer'

export class ElementHolder<T> implements Printer<T> {
  private values: T[] = []; 

  constructor(values: T[] = []) {
    this.values = values;
  }

  print(value: T): void {
    console.log(value);
  }

  printAll(): void {
    for (const value of this.values) { 
      this.print(value); 
    }
  }

  add(value: T): void {
    this.values.push(value);
  }

  remove(value: T): void {
    this.values = this.values.filter(v => v !== value);
  }
}


const holder = new ElementHolder<string>(["hello", "world", "typescript"]);
holder.printAll();  // This will print "hello", "world", "typescript"

holder.add("new element");
holder.printAll();  // Now prints "hello", "world", "typescript", "new element"

holder.remove("world");
holder.printAll();  // Now prints "hello", "typescript", "new element"
