import React, { ReactElement, useState, useEffect, useMemo } from 'react';
import { AreaChart, Area, YAxis } from 'recharts';

interface Props {
  ccStreamer: WebSocket;
  btcHistory: [];
}

function Chart({ ccStreamer, btcHistory }: Props): ReactElement {
  const [data, setData] = useState([] as any);
  ccStreamer.onmessage = function onStreamMessage(message) {
    const parsedMessage = JSON.parse(message.data);

    if (parsedMessage.PRICE) {
      parsedMessage.close = parsedMessage.PRICE;
      setData([...data, parsedMessage]);
      console.log(data);
    }
  };
  useEffect(() => {
    data.push(...btcHistory);
  }, []);

  const renderChart = useMemo(() => {
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <YAxis type="number" domain={['dataMin', 'dataMax']} />
        <Area
          isAnimationActive={false}
          type="monotone"
          dataKey="close"
          stroke="#8dc735"
          fill="#7fb329"
          name="Price"
        />
      </AreaChart>
    );
  }, [data]);
  return <div className="chart">{renderChart}</div>;
}

export default Chart;
