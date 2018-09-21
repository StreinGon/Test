import { INC, DECR } from "../constants/const";

export const increment = () => ({
  type: INC
});
export const decrement = () => ({
  type: DECR
});
