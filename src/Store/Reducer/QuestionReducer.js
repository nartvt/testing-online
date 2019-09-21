import QuestionList from "./Questions";

const initialState = QuestionList;
// state at here is question, state is all of where it exists
const QuestionReducer = (state=initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default QuestionReducer;
