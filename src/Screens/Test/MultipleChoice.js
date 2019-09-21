import React, { Component } from 'react'
import { connect } from 'react-redux';
import ACTION from '../../Commons/Constants';
 class MultipleChoice extends Component {
  render() {
    const { content, answers,_id } = this.props.element;
    const { index } = this.props;
    return (
      <div className="mb-3">
        <p className="lead">
          {index}: {content}
        </p>
        <div>
          {answers.map((answer, index) =>
            (
              <div key={index}>
                <input type="radio" name={_id}
                  onChange={() => this._calcMark(answer,_id)}
                />
                <span>{answer.content}</span>
              </div>
            )
          )}

        </div>
      </div>
    );
  }
   _calcMark = (answer,questionId) => {
    this.props.dispatch({
      type: ACTION.ADD_ANSWER,
      payload: {
        questionId,
        answer
      }
    })
  };
}
export default connect()(MultipleChoice);