import React, { ReactElement } from 'react';
import './CoinContainer.css';

interface Props {}

export default function CoinContainer({}: Props): ReactElement {
  const allCoins = [
    'BTC',
    'ETH',
    'BCH',
    'LTC',
    'UNI',
    'BAT',
    'DOGE',
    'GRT',
    'TRX',
    'AAVE',
  ];
  return (
    <div className="CoinContainer">
      {(() => {
        return allCoins.map((coin) => {
          return (
            <>
              <div className="coin_show">{coin}</div>
              <br />
            </>
          );
        });
      })()}
    </div>
  );
}
