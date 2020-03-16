<script>
  /*
  const ticker = [
    "fUSD", //"symbol"
    0.0003136958904109589, // "FRR"
    0.00026, // "Bid" - 2
    30, // "Bid Period"
    3383278.67496219, // "Bid size of the 25 highest bids"
    0.00023, // "Ask" - 5
    2, // "Ask Period"
    31191.916802589996, // "Ask size of the 25 highest asks"
    -0.000105, // "Daily change in amount" - 8
    -0.3559, // "Daily change relative"
    0.00019, // "Last price"
    160093693.1735662, // volume - 11
    0.00032526, // high
    0.0000245, // low
    null,
    null,
    82128383.8489956 // FRR Available - 16
  ];*/
  export let ticker;

  const symbol = 0;
  const bidRate = 2;
  const askRate = 5;
  const dailyChange = 9;
  const last = 10;
  const volume = 11;
  const high = 12;
  const low = 13;

  let cleanSymbol = ticker[symbol].substring(1);
  let change = (ticker[dailyChange] * 100).toFixed(2);

  function rateToYearly(rate) {
    return (rate * 365 * 100).toFixed(2);
  }

  const baseURL = "https://www.bitfinex.com";
  const refCode = "vyFYGxcn";
</script>

<style>
  td {
    @apply py-4;
  }

  .positive {
    @apply text-green-500;
  }

  .negative {
    @apply text-red-500;
  }
</style>

<!--  <div class="w-full h-full bg-red-200">
      <img
        class="w-8"
        src={`logos/${cleanSymbol}.png`}
        alt={`logo ${cleanSymbol}`} />
    </div>
  -->

<tr>
  <td>
    <div class="flex justify-end pr-4">
      <img
        class="w-8 mr-0"
        src={`logos/${cleanSymbol}.png`}
        alt={`logo ${cleanSymbol}`} />
    </div>
  </td>
  <td>
    <div class="text-gray-700 uppercase font-semibold w-1/12">
      {cleanSymbol}
    </div>
  </td>
  <td class=" flex-col justify-center text-right w-2/12 pr-4">
    <div class="text-gray-700 font-semibold">
      {rateToYearly(ticker[last])}%
      <span class="font-normal text-gray-600">yearly</span>
    </div>
    <div class="text-sm text-gray-600 mt-1">/ {ticker[last]}</div>
  </td>
  <td
    class=" flex-col justify-center text-right w-2/12 pr-4 hidden sm:table-cell">
    <div class="text-gray-700 font-semibold">
      {rateToYearly(ticker[bidRate])}%
      <span class="font-normal text-gray-600">yearly</span>
    </div>
    <div class="text-sm text-gray-600 mt-1">/ {ticker[bidRate]}</div>
  </td>

  <td
    class=" flex-col justify-center text-right w-2/12 pr-4 hidden sm:table-cell">
    <div class="text-gray-700 font-semibold">
      {rateToYearly(ticker[askRate])}%
      <span class="font-normal text-gray-600">yearly</span>
    </div>
    <div class="text-sm text-gray-600 mt-1">/ {ticker[askRate]}</div>
  </td>
  <td
    class="text-center sm:text-right font-semibold {change > 0 ? 'positive' : 'negative'}">
    {change}%
  </td>
  <td class="">
    <div class="flex justify-center">
      <a href={`${baseURL}/f/${cleanSymbol}?refcode=${refCode}`}>
        <button
          class="bg-gray-300 text-gray-800 text-xs sm:text-sm font-semibold px-2
          sm:px-4 py-2 rounded-lg">
          To Market
        </button>
      </a>
    </div>
  </td>
</tr>
