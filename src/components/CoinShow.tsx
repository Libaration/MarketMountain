import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCandle } from '../components/FetchMethods';
import { VictoryChart, VictoryCandlestick } from 'victory';
import './CoinShow.css';
interface Props {}

function CoinShow({}: Props): ReactElement {
  let { coin } = useParams<{ coin: string }>();
  const [data, setData] = useState<any>();
  const fetchData = async () => {
    const returnedData = await fetchCandle(coin);
    console.log(returnedData);
    setData(returnedData);
  };
  useEffect(() => {
    fetchData();
  }, [coin]);
  const renderChart = () => {
    return (
      <VictoryChart domainPadding={{ x: 20, y: 5 }}>
        <VictoryCandlestick
          animate={{
            duration: 500,
            onLoad: { duration: 500 },
          }}
          candleColors={{ positive: '#70D25F', negative: '#C70039' }}
          data={data}
        />
      </VictoryChart>
    );
  };
  return (
    <div className="marketchart">
      <h5 style={{ color: 'red' }}>
        I'm under construction every github push automatically updates me.
        Sometimes I might be rate limited or not functional c:
      </h5>
      {coin}
      {renderChart()}
    </div>
  );
}

export default CoinShow;
