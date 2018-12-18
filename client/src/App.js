import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fibonacci from './Fibonacci';
import PageTwo from './PageTwo';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/pagetwo">Page Two</Link>
          </header>
          <div>
            <Route exact path="/" component={Fibonacci} />
            <Route path="/pagetwo" component={PageTwo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
