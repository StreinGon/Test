export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos;
    case "ACTIVE":
      return todos.filter(t => !t.completed);
    case "COMPLETED":
      return todos.filter(t => t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
