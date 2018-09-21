import { ADD_TODO, EXECUTE_TODO } from "../constants/const";
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          completed: false
        }
      ];
    case EXECUTE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todos;
