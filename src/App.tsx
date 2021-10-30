import React from 'react';
import './App.css';
import Preview from './components/Preview';
import { Route, Switch, Link } from 'wouter';
import logo from './images/logo.png';
import CoinContainer from './containers/CoinContainer';

function App() {
  return (
    <div className="App">
      <header className="header-gutters">
        <Link href="/">
          <a className="nav-link">
            <img src={logo} alt="logo" className="header-logo" />
          </a>
        </Link>
        <ul>
          <li>About</li>
        </ul>
      </header>
      <Switch>
        <Route path="/coins" component={CoinContainer} />
        <Route path="/" component={Preview} />
      </Switch>
    </div>
  );
}

export default App;
