import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCandle } from '../components/FetchMethods';
interface Props {}

function CoinShow({}: Props): ReactElement {
  let { coin } = useParams<{ coin: string }>();
  const [data, setData] = useState();
  const fetchData = async () => {
    const returnedData = await fetchCandle(coin);
    console.log(returnedData);
    setData(returnedData);
  };
  useEffect(() => {
    fetchData();
  }, [coin]);
  return <div className="marketchart">{coin}</div>;
}

export default CoinShow;
