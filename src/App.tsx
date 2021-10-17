import React from 'react';
import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="header-gutters">
        <img src={logo} alt="logo" className="header-logo" />
        <ul>
          <li>About</li>
        </ul>
      </header>
      dummy content
    </div>
  );
}

export default App;
