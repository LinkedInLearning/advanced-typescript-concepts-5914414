interface User {
  id: number;
  username: string;
  email: string;
}

function getUser(id: number): User;
function getUser(username: string): User[];
function getUser(id: number, username: string): User;
function getUser(param1: number | string, param2?: string): User | User[] {
  if (typeof param1 === 'number' && param2) {
    // Fetch user by ID and username
    console.log(`Fetching user by ID: ${param1} and username: ${param2}`);
    return { id: param1, username: param2, email: "example@email.com" }; // Simulated data
  } else if (typeof param1 === 'number') {
    // Fetch user by ID
    console.log(`Fetching user by ID: ${param1}`);
    return { id: param1, username: "user123", email: "user@example.com" }; // Simulated data
  } else {
    // Fetch users by username
    console.log(`Fetching users by username: ${param1}`);
    return [{ id: 1, username: param1, email: "user@example.com" }]; // Simulated data
  }
}

// Usage
console.log(getUser(10));
console.log(getUser("john_doe"));
console.log(getUser(10, "john_doe"));