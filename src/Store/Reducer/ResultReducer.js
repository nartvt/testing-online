import ACTION from '../../Commons/Constants';
let inittialState = {
  totalPoint: 0,
  correctAnswers: 0,
  answers: []
}
const ResultReducer = (state=inittialState, action) => {
  switch (action.type) {
    case ACTION.ADD_ANSWER:
      let index = state.answers.findIndex(item => item.questionId === action.payload.questionId);
      if (index!==-1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
      return state;
    case ACTION.SET_RESULT:
      state.totalPoint = action.payload.totalPoint;
      state.correctAnswers = action.payload.correctAnswers;
      return { ...state };
    default: return state;
  } 
}
export default ResultReducer;