import './App.css';

import MainComp from './mainComponent';
import MainPage from './MainPage';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './LoginForm';



var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}


function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
      </div>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
    this.state = { isAuthenticated: false }
  }
  authenticate() {
    this.setState({ isAuthenticated: true });
  }
  render() {
    return (
      <div className="App">
        <MainComp isAuthenticated={this.state.isAuthenticated} />
        {this.state.isAuthenticated === true ? <MainPage /> : <LoginForm onClick={this.authenticate} />}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
