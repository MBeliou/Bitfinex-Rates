<script>
  import Row from "./Row.svelte";
  import { _ } from "svelte-i18n";

  export let tickers;
</script>

<style global>
  tbody {
    @apply bg-gray-100;
  }

  tbody > tr:nth-child(2n) {
    @apply bg-gray-200;
  }

  th:last-child {
    @apply rounded-tr-lg;
  }

  th:first-child {
    @apply rounded-tl-lg;
  }

  th {
    @apply py-2 uppercase text-xs text-gray-600 font-bold tracking-widest;
  }

  tbody > tr:last-child > td:first-child {
    @apply rounded-bl-lg;
  }

  tbody > tr:last-child > td:last-child {
    @apply rounded-br-lg;
  }
</style>

<div class="mx-auto max-w-lg sm:max-w-xl md:max-w-4xl text-center md:text-left">
  <h1 class="text-gray-200 text-xl font-semibold tracking-wide">
    {$_('table.title')}
  </h1>
</div>
<table
  class="mt-3 mx-auto w-full max-w-lg sm:max-w-2xl md:max-w-4xl shadow-lg
  rounded-lg">
  <thead class="bg-gray-200 py-2 rounded-t-lg px-4">
    <tr class="">
      <th class="" />
      <th class="text-left py-4">{$_('table.symbol')}</th>
      <th class="text-right pr-4">{$_('table.last')}</th>
      <th class="text-right pr-4 hidden sm:table-cell">{$_('table.bid')}</th>
      <th class="text-right pr-4 hidden sm:table-cell">{$_('table.ask')}</th>
      <th class="text-center sm:text-right">{$_('table.change')}</th>
      <th />
    </tr>
  </thead>
  <tbody>
    {#each tickers as ticker}
      <Row {ticker} />
    {/each}
  </tbody>
</table>
