import React, { ReactElement, useMemo } from 'react';
import { AreaChart, Area, YAxis } from 'recharts';

interface Props {
  ccStreamer: WebSocket;
  coinHistory: [];
  coin: string;
}

function Chart({ ccStreamer, coinHistory, coin }: Props): ReactElement {
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
          bottom: 0,
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
      <img src={process.env.PUBLIC_URL + `/images/${coin}.png`} alt="coin" />
      <div className="chartLabel">
        <b>{coin.toUpperCase()}</b>
      </div>
      {renderChart}
    </div>
  );
}

export default Chart;
