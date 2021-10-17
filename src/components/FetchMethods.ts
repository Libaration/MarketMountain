export const fetchPrices = async () => {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10&api_key=${process.env.REACT_APP_API_KEY}`
  );
  const responseJSON = await response.json();
  return responseJSON.Data.Data;
};
