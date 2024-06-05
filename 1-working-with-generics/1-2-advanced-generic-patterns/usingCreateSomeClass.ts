import { CreateSomeClass } from "./CreateSomeClass";
import { Dog } from "./Dog";

const creator = new CreateSomeClass<Dog>();
const myDog = creator.create(Dog);
console.log(myDog.name); // Outputs: Buddy
console.log(myDog.bark()); // Outputs: Woof!