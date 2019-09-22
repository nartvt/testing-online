import  ACTION  from './../../Commons/Constants';
let initialState = null;
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_CREDENTIALS:
      state = action.payload;
      return state;
  default: return state;
  }
  return state;
};

export default UserReducer;