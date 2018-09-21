import {
  COUNTER_BLOCK,
  FORM_BLOCK,
  PHOTO_BLOCK,
  TODO_BLOCK,
  GET_ANOTHER_BLOCK_REQUEST,
  FETCHING
} from "../constants/const";
export default (state = COUNTER_BLOCK, action) => {
  switch (action.type) {
    case GET_ANOTHER_BLOCK_REQUEST: {
      state = FETCHING;
      return state;
    }
    case COUNTER_BLOCK: {
      state = COUNTER_BLOCK;
      return state;
    }
    case FORM_BLOCK: {
      state = FORM_BLOCK;
      return state;
    }
    case PHOTO_BLOCK: {
      state = PHOTO_BLOCK;
      return state;
    }
    case TODO_BLOCK: {
      state = TODO_BLOCK;
      return state;
    }
    default:
      return state;
  }
};
