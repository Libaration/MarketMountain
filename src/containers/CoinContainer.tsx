import React, { ReactElement } from 'react';
import btcside from '../images/btcside.png';
import './CoinContainer.css';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { allCoins } from '../components/Globals';
import Preview from '../components/Preview';
import CoinShow from '../components/CoinShow';
interface Props {}

export default function CoinContainer({}: Props): ReactElement {
  let match = useRouteMatch();
  return (
    <div className="CoinContainer">
      <div className="coin_content flex1">
        {(() => {
          return allCoins.map((coin) => {
            return (
              <>
                <Link to={`/coins/${coin}`}>
                  <div className="coin_show">{coin}</div>
                </Link>
                <br />
              </>
            );
          });
        })()}
      </div>

      <div className="side flex1">
        <Switch>
          <Route path={`${match.path}/:coin`}>
            <CoinShow />
          </Route>
          <div id="welcomediv">
            <span id="welcome">Welcome to the markets</span>
            <img src={btcside} id="sideBanner1" alt="side banner" />
          </div>
        </Switch>
      </div>
    </div>
  );
}
