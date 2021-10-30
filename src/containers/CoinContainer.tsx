import React, { ReactElement } from 'react';
import btcside from '../images/btcside.png';
import './CoinContainer.css';
import { Link } from 'wouter';
import { allCoins } from '../components/Globals';
interface Props {}

export default function CoinContainer({}: Props): ReactElement {
  return (
    <div className="CoinContainer">
      <div className="coin_content flex1">
        {(() => {
          return allCoins.map((coin) => {
            return (
              <>
                <Link href={`/coins/${coin}`}>
                  <div className="coin_show">{coin}</div>
                </Link>
                <br />
              </>
            );
          });
        })()}
      </div>
      <div className="side flex1">
        <span id="welcome">Welcome to the markets</span>

        <img src={btcside} id="sideBanner1" alt="side banner" />
      </div>
    </div>
  );
}
