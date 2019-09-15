import { combineReducers } from 'redux';
import ScreenReducer from './ScreenReducer';
import UserReducer from './UserReducer';


const RootReducer = combineReducers(
  {
    screen: ScreenReducer,
    credentials: UserReducer
  }
)

export default RootReducer;