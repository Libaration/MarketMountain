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
    subs: [`2~Coinbase~BTC~USD`, `2~Coinbase~LTC~USD`],
  };
  ccStreamer.send(JSON.stringify(subRequest));
};

function App() {
  const [btcHistory, setBtcHistory] = useState([] as any);
  const [ltcHistory, setLtcHistory] = useState([] as any);

  useEffect(() => {
    const fetchBtcPrices = async () => {
      const response = await fetchPrices('btc');
      await setBtcHistory(btcHistory.push(...response));
    };
    const fetchLtcPrices = async () => {
      const response = await fetchPrices('ltc');
      await setLtcHistory(ltcHistory.push(...response));
    };

    fetchBtcPrices();
    fetchLtcPrices();
    ccStreamer.onmessage = function onStreamMessage(message) {
      const parsedMessage = JSON.parse(message.data);
      switch (parsedMessage.FROMSYMBOL) {
        case 'BTC':
          if (parsedMessage.PRICE) {
            parsedMessage.close = parsedMessage.PRICE;
            btcHistory.push(parsedMessage);
            setBtcHistory([...btcHistory]);
          }
          break;
        case 'LTC':
          if (parsedMessage.PRICE) {
            parsedMessage.close = parsedMessage.PRICE;
            ltcHistory.push(parsedMessage);
            setLtcHistory([...ltcHistory]);
          }
      }
    };
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
        <Chart ccStreamer={ccStreamer} btcHistory={btcHistory} coin="btc" />
      ) : (
        'loading'
      )}
      {btcHistory ? (
        <Chart ccStreamer={ccStreamer} btcHistory={ltcHistory} coin="ltc" />
      ) : (
        'loading'
      )}
    </div>
  );
}

export default App;
