import React, { Component } from 'react';
import { connect } from "react-redux"
import * as _ from 'lodash';
import  ACTION  from './../../Commons/Constants';

class LoginScreen extends Component {
   state = {
     email: '',
    password: '' 
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form onSubmit={this._handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name='email' onChange={this._handleChange}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name='password' onChange={this._handleChange}/>
              </div>
              <div className="text-center">
                <button type='submit' className="btn btn-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
  _handleSubmit = e => {
    e.preventDefault();
    if (this.state.email === 'admin' && this.state.password === 'admin') {
      localStorage.setItem('userLogin',JSON.stringify(_.pick(this.state, ['email'])));
      console.log(e);
      this.props.dispatch({
        type: ACTION.SET_CREDENTIALS,
        payload: _.pick(this.state,["email"])
      });
      this.props.dispatch({
        type: ACTION.CHANGE_SCREEN,
        payload: 'home'
      });
    }
  }
  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

export default connect()(LoginScreen);