import React, { Component } from 'react';

class TestScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Online Test</h1>
        <div className="mb-3">
          <p className="lead">
            Câu 1: Đây là câu hỏi 1?
    </p>
          <div>
            <div>
              <input type="radio" />
              <span>Đáp án 1</span>
            </div>
            <div>
              <input type="radio" />
              <span>Đáp án 2</span>
            </div>
            <div>
              <input type="radio" />
              <span>Đáp án 2</span>
            </div>
            <div>
              <input type="radio" />
              <span>Đáp án 4</span>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p className="lead">
            Câu 2: Đáp án đúng cho câu hỏi là?
    </p>
          <input type="text" className="form-control w-50" />
        </div>
      </div>

    );
  }
}

export default TestScreen;