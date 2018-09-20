export const AddTodo = (task, id) => ({
  type: "ADD_TODO",
  id,
  completed: false,
  task
});
export const ExecuteTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
export const FilterALL = () => ({
  type: "ALL"
});
export const FilterActive = () => ({
  type: "ACTIVE"
});
export const FilterCompleted = () => ({
  type: "COMPLETED"
});
