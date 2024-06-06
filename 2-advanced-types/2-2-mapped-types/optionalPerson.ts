import { Person } from './Person';

type OptionalPerson = {
  [Property in keyof Person]?: Person[Property];
}

