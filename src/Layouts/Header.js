import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTION_UTILS } from './../Commons/Constants';

const Menu = [
  { title: "Home", slug: 'home' },
  { title: "Login", slug: 'login' },
  { title: "Test", slug: 'test' }
];

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <a className="navbar-brand" >Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
          data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this._renderMenuItem()}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
      </button>
          </form>
        </div>
      </nav>

    );
  }
  _renderMenuItem = () => {
    return Menu.map(item => (
      <li className="nav-item" key={item.slug} >
        <span className="nav-link"
          style={{ cursor: 'pointer' }}
          onClick={() => this._changeScreen(item.slug)}>
          {item.title}
        </span>
      </li>
    ));
  };
  _changeScreen = screen => {
    this.props.dispatch({
      type: ACTION_UTILS.CHANGE_SCREEN,
      payload: screen
    })
  }
}

export default connect()(Header);