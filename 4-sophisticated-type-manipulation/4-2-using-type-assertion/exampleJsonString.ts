let jsonString: string = '{"name": "John", "age": 30}';

// We know the structure of JSON, assert the type
let userInfo: { name: string; age: number } = JSON.parse(jsonString) as { name: string; age: number };

console.log(userInfo.name); // Outputs: John
console.log(userInfo.age); // Outputs: 30
