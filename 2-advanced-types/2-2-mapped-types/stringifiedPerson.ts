import { Person } from './Person';

type StringifiedPerson = {
  [Property in keyof Person]: string;
}
 
const stringPerson: StringifiedPerson = {
  name: "Pradeepa",
  age: "30" // Note: 'age' is now a string
};
