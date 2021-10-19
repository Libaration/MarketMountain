import React, { ReactElement, useState, useRef } from 'react';
import swap from '../images/swap.png';
import Select from 'react-select';
import './Exchange.css';
import { fSym } from '../components/ListItems';
import { fetchConversion } from './FetchMethods';

interface Props {}

export default function Exchange({}: Props): ReactElement {
  const lengthErrorRef = useRef<HTMLDivElement>(null);
  const [currentToSymbol, setToSymbol] = useState('USD');
  const [currentFromSymbol, setFromSymbol] = useState('LTC');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState<any>(0);
  const handleFromSymbolChange = (e: any) => {
    setFromSymbol(e.value);
  };
  const handleToSymbolChange = (e: any) => {
    setToSymbol(e.value);
  };
  const convert = async () => {
    setConverted(
      await fetchConversion(currentFromSymbol, currentToSymbol, amount)
    );
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num: number = parseInt(e.target.value);
    if (num > 0) {
      setAmount(parseInt(e.target.value));
      lengthErrorRef.current!.style!.display = 'none';
    } else if (num < 0) {
      lengthErrorRef.current!.style!.display = 'block';
      lengthErrorRef.current!.innerHTML = 'Amount must be greater than 0';
    }
  };
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
        onChange={handleFromSymbolChange}
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
        onChange={handleToSymbolChange}
      />
      <input
        type="number"
        name="conversionAmount"
        onChange={handleAmountChange}
        min="1"
      />
      <div className="convertedContainer">Rate: {converted}</div>
      <div className="tooShort error" ref={lengthErrorRef}>
        Amount must be greater than 0
      </div>

      <button className="signupButton convertPadding" onClick={convert}>
        Convert
      </button>
    </div>
  );
}
