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

export const fetchPrices = async (sym: string) => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${sym}&tsym=USD&limit=100&api_key=${process.env.REACT_APP_API_KEY}`
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
