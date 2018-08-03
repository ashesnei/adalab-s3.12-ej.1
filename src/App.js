import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import about from './components/about';
import home from './components/home';
import pricing from './components/pricing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path ='/' component= {home} />
            <Route path ='/about' component= {about} />
            <Route path ='/pricing' component= {pricing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
