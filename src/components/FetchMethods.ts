interface dataPoint {
  time: number | string;
  high: number;
  low: number;
  open: number;
  volumefrom: number;
  volumeto: number;
  close: number;
  conversionType: string;
  conversionSymbol: string;
}
interface candleStick {
  close: number;
  high: number;
  low: number;
  open: number;
  coversionSymbol: string;
  conversionType: string;
  time: number;
  volumefrom: number;
  volumeto: number;
}
interface candleStickDataPoint {
  x: string;
  open: number;
  close: number;
  low: number;
  high: number;
}
export const fetchPrices = async (sym: string) => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${sym}&tsym=USD&limit=30&api_key=${process.env.REACT_APP_API_KEY}`
  );
  const responseJSON = await response.json();
  //   responseJSON.Data.Data.forEach((obj: dataPoint) => {
  //     obj.time = convertTime(obj.time)!;
  //   });

  return responseJSON.Data.Data;
};

const convertTime = (unixTimestamp: number | string) => {
  if (typeof unixTimestamp === 'number') {
    const date = new Date(unixTimestamp * 1000);
    return `${date.getMonth()}/${date.getDate()}`;
  }
};

export const fetchConversion = async (
  fromSym: string,
  toSym: string,
  amount: number
) => {
  const response = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/${fromSym}/${toSym}`,
    {
      headers: {
        'X-CoinAPI-Key': `${process.env.REACT_APP_COIN_API_KEY}`,
      },
    }
  );
  const responseJSON = await response.json();
  const convertedNum = ((await responseJSON.rate) * amount).toFixed(2);
  return convertedNum;
};

export const fetchCandle = async (sym: string) => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${sym}&tsym=USD&limit=10`,
    {
      headers: {
        authorization: `${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  const responseJSON = await response.json();
  const candleData = responseJSON.Data.Data;
  let updatedObjs: candleStickDataPoint[] = [];
  candleData.map((obj: candleStick) => {
    updatedObjs.push({
      x: obj.time.toString(),
      close: obj.close,
      high: obj.high,
      low: obj.low,
      open: obj.open,
    });
  });
  return updatedObjs;
};
