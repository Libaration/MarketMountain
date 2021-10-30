import React from 'react';
import './App.css';
import Preview from './components/Preview';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './images/logo.png';
import CoinContainer from './containers/CoinContainer';
import { allCoins } from './components/Globals';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header-gutters">
          <Link to="/">
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
      </Router>
    </div>
  );
}

export default App;
