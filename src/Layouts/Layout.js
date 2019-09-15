import React, { Component } from 'react';
import Header from './Header';
import HomeScreen from '../Screens/Home/HomeScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import TestScreen from '../Screens/Test/TestScreen';
import { connect } from 'react-redux';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this._renderScreen()}
        {/* <HomeScreen />
        <LoginScreen />
        <TestScreen /> */}
      </div>
    );
  }
  _renderScreen = () => {
    switch (this.props.screen) {
      case 'home':
        return <HomeScreen />;
      case 'login':
        return <LoginScreen />;
      case 'test':
        return <TestScreen />;
      default:
        return null;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    screen: state.screen
  };
}
export default connect(mapStateToProps)(Layout);