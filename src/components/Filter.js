import { ALL, ACTIVE, COMPLETED } from "../constants/const";
export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case ALL:
      return todos;
    case ACTIVE:
      return todos.filter(todo => !todo.completed);
    case COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};
