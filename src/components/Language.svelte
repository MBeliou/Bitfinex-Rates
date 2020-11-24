<script>
  import { get } from "svelte/store";
  import { locale } from "svelte-i18n";

  const locales = ["en", "fr"];

  let currentLocale = get(locale).substr(0, 2);
  //$: currentLocale

  // console.log("current locale", currentLocale);

  function setNewLocale(val) {
    if (val !== currentLocale) {
      locale.set(val);
      currentLocale = val;
    }
  }
</script>

<style>
  button:focus {
    @apply outline-none;
  }

/*
  .active {
    @apply bg-gray-700 rounded-lg;
  }
*/
  .active > span {
      @apply border-b-2 border-gray-500 text-white font-semibold;
  }
</style>

<div class="flex">
  {#each locales as locale}
    <button
      class="w-1/2 py-4"
      on:click={() => setNewLocale(locale)}
      class:active={currentLocale === locale}>
      <span class="uppercase py-2 text-gray-600">{locale}</span>
    </button>
  {/each}
</div>
