<script>
  import { BitfinexAPI } from "../api";
  import Table from "components/Table/Table.svelte";
  import Row from "components/Table/Row.svelte";
  import Loading from "components/Loading.svelte";
  import Lendfinex from "components/Lendfinex/Lendfinex.svelte";

  let api = new BitfinexAPI();

  let tickers = api.getTickers();
  /*
  const delay = ms => new Promise(res => setTimeout(res, ms));

  let tickers = (async () => {
    await delay(1000);
    return [];
  })();
*/
</script>

<style>
  :root {
    @apply bg-gray-300;
  }
</style>

<Lendfinex />

<div class="h-8" />
{#await tickers}
  <div class="mx-auto max-w-md">
    <Loading />
  </div>
{:then tickers}
  {#if tickers.length > 0}
    <Table {tickers} />
  {:else}
    <div
      class="max-w-sm mx-auto bg-red-700 flex items-center rounded-lg shadow-md">
      <div class="rounded-l-lg w-1/5">
        <p
          class="rounded-full text-lg font-black bg-white h-8 w-8 text-center
          mx-auto text-red-800">
          !
        </p>
      </div>
      <div class=" rounded-r-lg w-4/5 bg-white">
        <div class="bg-white py-5 px-4 rounded-tr-lg">
          <p class="text-gray-900 font-semibold tracking-wide ">
            Couldn't connect to Bitfinex
          </p>
        </div>
        <div class="text-right py-2 px-4 rounded-br-lg bg-gray-100">
          <button
            class="py-2 px-4 text-gray-100 font-semibold bg-gray-800 rounded-lg
            focus:outline-none hover:bg-gray-700"
            on:click={() => (tickers = api.getTickers)}>
            Retry
          </button>
        </div>
      </div>
    </div>
  {/if}
{:catch error}
  <p>Error catching tickers</p>
{/await}

<div class="h-12" />
