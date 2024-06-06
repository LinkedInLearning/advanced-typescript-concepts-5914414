export interface Task {
  title: string;
  description: string;
  completed: boolean;
}

function updateTask(task: Task, fieldsToUpdate: Partial<Task>): Task {
  return { ...task, ...fieldsToUpdate };
}

const task: Task = {
  title: "Learn TypeScript",
  description: "Understand utility types",
  completed: false,
};

const updatedTask = updateTask(task, { completed: true });
