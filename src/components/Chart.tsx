import React, { ReactElement, useMemo } from 'react';
import { AreaChart, Area, YAxis } from 'recharts';

interface Props {
  ccStreamer: WebSocket;
  coinHistory: any[];
  coin: string;
}
type Price = { PRICE: number };

function Chart({ ccStreamer, coinHistory, coin }: Props): ReactElement {
  const currentPrice = () => {
    if (coinHistory.length > 30) {
      return `$${coinHistory[coinHistory.length - 1].PRICE}`;
    }
  };
  const renderChart = useMemo(() => {
    return (
      <AreaChart
        width={200}
        height={100}
        data={coinHistory}
        margin={{
          top: 50,
          right: 30,
          left: -50,
          bottom: -0,
        }}
      >
        <YAxis
          type="number"
          domain={['dataMin', 'dataMax']}
          tick={false}
          axisLine={false}
        />
        <Area
          isAnimationActive={false}
          type="monotone"
          dataKey="close"
          stroke="#8dc735"
          fill="#7fb329"
        />
      </AreaChart>
    );
  }, [coinHistory]);
  return (
    <div className="chart">
      <div className="coin">
        <img src={process.env.PUBLIC_URL + `/images/${coin}.png`} alt="coin" />

        <div className="chartLabel">
          <b>{coin.toUpperCase()}</b>
        </div>
        <div className="chartOffset">{renderChart}</div>
        <div className="currentPrice">{currentPrice()}</div>
      </div>
    </div>
  );
}

export default Chart;
