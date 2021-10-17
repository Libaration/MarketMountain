import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png';
import { fetchPrices } from './components/FetchMethods';
import Chart from './components/Chart';

function App() {
  const [btcHistory, setBtcHistory] = useState();
  useEffect(() => {
    fetchPrices().then((res) => {
      setBtcHistory(res);
    });
  }, []);
  return (
    <div className="App">
      <header className="header-gutters">
        <img src={logo} alt="logo" className="header-logo" />
        <ul>
          <li>About</li>
        </ul>
      </header>
      {btcHistory ? <Chart data={btcHistory} /> : 'loading'}
    </div>
  );
}

export default App;
