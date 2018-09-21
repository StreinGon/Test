import {
  ADD_TODO,
  EXECUTE_TODO,
  ALL,
  ACTIVE,
  COMPLETED
} from "../constants/const";
export const addTodo = (task, id) => ({
  type: ADD_TODO,
  id,
  completed: false,
  task
});
export const executeTodo = id => ({
  type: EXECUTE_TODO,
  id
});
export const filterALL = () => ({
  type: ALL
});
export const filterActive = () => ({
  type: ACTIVE
});
export const filterCompleted = () => ({
  type: COMPLETED
});
