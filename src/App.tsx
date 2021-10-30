import React, { useEffect, useState } from 'react';
import './App.css';
import Preview from './components/Preview';
import { Link, Route, Switch } from 'wouter';

import CoinContainer from './containers/CoinContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/coins" component={CoinContainer} />
        <Route path="/" component={Preview} />
      </Switch>
    </div>
  );
}

export default App;
