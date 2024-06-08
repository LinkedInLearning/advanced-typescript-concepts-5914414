interface User {
  readonly id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "Malika Z",
};

// Error: Cannot assign to 'name' because it is a read-only property.
// user.name = "Marya A";
