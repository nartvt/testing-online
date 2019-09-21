import React, { Component } from 'react'
import ACTION from '../../Commons/Constants';

export default class FillToBlank extends Component {
  render() {
    return (
      <div className="mb-3">
        <p className="lead">
          {this.props.index}:{this.props.element.content}
        </p>
        <input type="text" className="form-control w-50"
          onBlur={event =>
            this._calcMark(
              event,
              this.props.element.answers[0],
              this.props.element._id
            )}
        />
      </div>
    );
  }
  _calcMark = (event, ans, questionId) => {
    this.props.dispatch({
      type: ACTION.ADD_ANSWER,
      payload: {
        questionId,
        answer: {
          exact: event.target.value === ans.content
        }
      }})
  };
}
