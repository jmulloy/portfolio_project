import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Navbar.js'
import Welcome from './components/Welcome.js'
import About from './components/About.js'
import { Switch, Route } from 'react-router-dom'
import Resume from './components/Resume.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header className="Header"/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resume' component={About} />
        
      </Switch>

      </div>
    );
  }
}

export default App;