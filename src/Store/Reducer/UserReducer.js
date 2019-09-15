import { ACTION_UTILS } from './../../Commons/Constants';
let initialState = null;
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_UTILS.SET_CREDENTIALS:
      state = action.payload;
      return state;
  }
  return state;
};

export default UserReducer;