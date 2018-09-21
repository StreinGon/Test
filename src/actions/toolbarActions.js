//Constans
import {
  COUNTER_BLOCK,
  FORM_BLOCK,
  PHOTO_BLOCK,
  TODO_BLOCK,
  GET_ANOTHER_BLOCK_REQUEST
} from "../constants/const";
export function counter() {
  return dispatch => {
    dispatch({
      type: GET_ANOTHER_BLOCK_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: COUNTER_BLOCK
      });
    }, 2000);
  };
}
export function form() {
  return dispatch => {
    dispatch({
      type: GET_ANOTHER_BLOCK_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: FORM_BLOCK
      });
    }, 2000);
  };
}
export function photolist() {
  return dispatch => {
    dispatch({
      type: GET_ANOTHER_BLOCK_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: PHOTO_BLOCK
      });
    }, 2000);
  };
}
export function todolist() {
  return dispatch => {
    dispatch({
      type: GET_ANOTHER_BLOCK_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: TODO_BLOCK
      });
    }, 2000);
  };
}
