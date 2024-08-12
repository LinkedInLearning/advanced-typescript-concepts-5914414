import { Person } from './Person';

type OptionalPerson = {
  [Property in keyof Person]?: Person[Property];
}

const person: OptionalPerson = {
  name: "Maryam",  // 'age' is now optional thanks to the mapped type
};
