import React, { Component } from "react";
import { connect } from "react-redux";
import  ACTION  from './../Commons/Constants';
// const Menu = [
//   { title: "Home", slug: "home" },
//   { title: "Login", slug: "login" },
//   { title: "Test", slug: "test" }
// ];

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => this._changeScreen("home")}
              >
                Home
              </span>
            </li>
            { !this.props.credentials &&(
        
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => this._changeScreen("login")}
                >
                  Login
              </span>
              </li>
              )}
            {this.props.credentials && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => this._changeScreen("test")}
                >
                  Test
              </span>
              </li>
            )}
            {this.props.credentials && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => this._signOut}
                >
                  sign Out
              </span>
              </li>
            )}
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
  _signOut = () => {
    localStorage.removeItem('userLogin');
    this.props.dispatch({
      type: ACTION.SET_CREDENTIALS,
      payload: null
    });
  }
  _changeScreen = screen => {
    this.props.dispatch({
      type: ACTION.CHANGE_SCREEN,
      payload: screen
    });
  };
}
const _mapStateToProps=(state) => {
  return {
    credentials: state.credentials
  }
}
export default connect(_mapStateToProps)(Header);
