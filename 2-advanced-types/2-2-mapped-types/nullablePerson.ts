import { Person } from './Person';

type NullablePerson = {
  [Property in keyof Person]: Person[Property] | null;
}
 

const nullablePerson: NullablePerson = {
  name: "Sean",
  age: null  // 'age' can now be null
};
