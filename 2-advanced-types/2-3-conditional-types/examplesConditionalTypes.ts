// Define a conditional type that checks if a type is assignable to string
type CheckString<T> = T extends string ? "String" : "Not a string";

// Usage of CheckString
type TypeA = CheckString<string>;  // "String"
type TypeB = CheckString<number>;  // "Not a string"


type ValidTypes = string | number | boolean;
type StringOrNumber<T> = T extends ValidTypes ? T : never;

type FilteredType = StringOrNumber<string | boolean | null>;  // string | boolean


type NestedConditional<T> = T extends number
  ? "Number"
  : T extends string
  ? "String"
  : "Other";

type Test1 = NestedConditional<string>;  // "String"
type Test2 = NestedConditional<boolean>;  // "Other"
