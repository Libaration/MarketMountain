import React, { ReactElement, useEffect, useState } from 'react';
import swap from '../images/swap.png';
import Select from 'react-select';
import './Exchange.css';
import { fSym } from '../components/ListItems';

interface Props {}

export default function Exchange({}: Props): ReactElement {
  useEffect(() => {}, []);

  return (
    <div className="exchange">
      <Select
        options={fSym}
        className="fSym"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral0: '#16161a',
            primary25: '#8dc735',
            neutral20: '#48535b',
            neutral50: 'white',
            neutral80: 'white',
            primary50: 'white',
            primary: '#8dc735',
            neutral40: 'green',
            neutral60: 'white',
          },
        })}
      />
      <img src={swap} className="swapImg" alt="Swap Coins" />
      <br />
      <Select
        options={fSym}
        className="fSym"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral0: '#16161a',
            primary25: '#8dc735',
            neutral20: '#48535b',
            neutral50: 'white',
            neutral80: 'white',
            primary50: 'white',
            primary: '#8dc735',
            neutral40: 'green',
            neutral60: 'white',
          },
        })}
      />
    </div>
  );
}
