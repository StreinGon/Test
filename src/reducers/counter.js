import { INC, DECR } from "../constants/const";
export default (state = 0, action) => {
  switch (action.type) {
    case INC: {
      return state + 1;
    }
    case DECR: {
      return state - 1;
    }
    default:
      return state;
  }
};
