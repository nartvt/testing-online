import React, { Component } from 'react';
import { connect } from "react-redux";
import MultipleChoice from './MultipleChoice';
import FillToBlank from './FillToBlank';
class TestScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Online Test</h1>
        {this._renderQuestions()}
        <button className='btn btn-success' onClick = {()=>this._calcTotalPoint()}>Submit</button>
        <p>Total point: {this.props.totalPoint}</p>
        <p>Correct answer: {this.props.correctAnswer}</p>
      </div>

    );
  }
  _calcTotalPoint = () => {
    let totalPoint = 0;
    let correctAnswer = 0;
    for (let ans of this.props.answers) {
      if (ans.answer.exact.toString()==='true') {
        totalPoint += 1.25;
        correctAnswer ++;
      }
    }
    this.props.dispatch({
      type: 'SET_RESULT',
      payload: {
        totalPoint,
        correctAnswer
      }
    })
}
  _renderQuestions = () => {
    this.questionList = this.props.questions;
    return this.questionList.map((element, index) => {
      if (element.questionType === 1) return <MultipleChoice element={element} key={index} index={index + 1} />;
      if (element.questionType === 2) return <FillToBlank element={element} key={index} index={index + 1} />;
    }
    );
  }
}
// 1. get question from Store
// 2. map question to GUI
// 2.1 check question type
/**
 * ===1 =>
 */

const _mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.result.answers,
    totalPoint: state.result.totalPoint,
    correctAnswer: state.result.correctAnswer
  }
}
export default connect(_mapStateToProps)(TestScreen);