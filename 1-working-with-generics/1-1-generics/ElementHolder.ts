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
