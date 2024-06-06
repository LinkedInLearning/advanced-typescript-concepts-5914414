type TodoInfo = Omit<Todo, "completed">;

const todoInfo: TodoInfo = {
  title: "Write blog post",
  description: "Write about TypeScript utility types",
}; 
