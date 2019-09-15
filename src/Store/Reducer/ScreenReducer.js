import { ACTION_UTILS } from './../../Commons/Constants';

let initialValue = 'home';
const ScreenReducer = (state = initialValue,action) => {
  // nhan vao action, tra ra gia tri screen moi
  // sau khi duoc cap nhat
  console.log(action);
  switch (action.type) {
    case ACTION_UTILS.CHANGE_SCREEN:
      state = action.payload;
      return state;
    default: return state;
  }
  return state;
}

export default ScreenReducer;