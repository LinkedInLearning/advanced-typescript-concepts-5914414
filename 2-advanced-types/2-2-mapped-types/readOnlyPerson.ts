import { Person } from './Person';

type ReadonlyPerson = {
  [Property in keyof Person]: Readonly<Person[Property]>;
}
 
const readPerson: ReadonlyPerson = {
  name: "Adnane",
  age: 38
};
