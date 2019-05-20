import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Navbar.js'
import Welcome from './components/welcome.js'
import About from './components/about.js'
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header className="Header"/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/about' component={About} />
      </Switch>

      </div>
    );
  }
}

export default App;