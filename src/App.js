import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Info from './components/Info';
import Books from './components/Books';


class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/info" component={Info} />
              <Route path="/" render={() => <Redirect to="/" />} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
