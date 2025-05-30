const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-hRJgYVmPuWz5P31MvccreYHZ";

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&ids=bitcoin&category=layer-1&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&price_change_percentage=1h&locale=en&x_cg_demo_api_key=${API_KEY}`;

const searchCoins = (query) => `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = coin => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;

export { getCoinList, searchCoins, marketChart };
