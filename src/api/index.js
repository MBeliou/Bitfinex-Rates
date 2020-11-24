const WEB_CORS = "https://lendfinex-cors.herokuapp.com/";

const BASE_BITFINEX_URL = "https://api-pub.bitfinex.com/v2/tickers";

class BitfinexAPI {
  constructor() {
    this.getTickers = this.getTickers.bind(this);
  }

  _nonce() {
    return (Date.now() * 1000).toString();
  }

  _makeQueryURL() {
    return `${WEB_CORS}${BASE_BITFINEX_URL}?symbols=ALL`;
  }

  async getTickers() {
    try {
      const req = await fetch(this._makeQueryURL());
      const resp = await req.json();
      return this._filterTickers(resp).sort((a, b) => b[10] - a[10]);
    } catch (error) {
      console.error(error);
    }
  }

  _filterTickers(tickers) {
    return tickers.filter(ticker => ticker[0].startsWith("f") && !ticker[0].includes("TEST"));
  }
}
export { BitfinexAPI };
