import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './images/logo.png';
import { fetchPrices } from './components/FetchMethods';
import Chart from './components/Chart';

const ccStreamer = new WebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${process.env.REACT_APP_API_KEY}`
);
ccStreamer.onopen = function onStreamOpen() {
  var subRequest = {
    action: 'SubAdd',
    subs: ['2~Coinbase~LTC~USD'],
  };
  ccStreamer.send(JSON.stringify(subRequest));
};
function App() {
  const [btcHistory, setBtcHistory] = useState();
  useEffect(() => {
    const fetchBtcPrices = async () => {
      const response = await fetchPrices('ltc');
      setBtcHistory(response);
    };

    fetchBtcPrices();
  }, []);
  return (
    <div className="App">
      <header className="header-gutters">
        <img src={logo} alt="logo" className="header-logo" />
        <ul>
          <li>About</li>
        </ul>
      </header>
      {btcHistory ? (
        <Chart ccStreamer={ccStreamer} btcHistory={btcHistory} />
      ) : (
        'loading'
      )}
    </div>
  );
}

export default App;
