import { Person } from './Person';

type StringProperties<T> = {
  [Property in keyof T as T[Property] extends string ? Property : never]: T[Property];
}

type PersonStringProperties = StringProperties<Person>;
// Result: { name: string }
