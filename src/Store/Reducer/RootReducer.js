import { combineReducers } from 'redux';
import ScreenReducer from './ScreenReducer';
import UserReducer from './UserReducer';
import QuestionReducer from './QuestionReducer';
import ResultReducer from './ResultReducer';

const RootReducer = combineReducers(
  {
    screen: ScreenReducer,
    credentials: UserReducer,
    questions: QuestionReducer,
    result: ResultReducer
  }
)

export default RootReducer;