import React, { ReactElement } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  data: [];
}

function Chart({ data }: Props): ReactElement {
  return (
    <div className="chart">
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
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="open" stroke="#00FF00" fill="#fff" />
        <Area type="monotone" dataKey="close" stroke="#ff0000" fill="#fff" />
      </AreaChart>
    </div>
  );
}

export default Chart;
