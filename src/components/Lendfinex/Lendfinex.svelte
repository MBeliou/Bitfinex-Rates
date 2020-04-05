<script>
  import { _ } from "svelte-i18n";

</script>

<div
  class="mt-6 max-w-sm mx-auto rounded-lg bg-yellow-500 hover:bg-yellow-400
  text-gray-800">
  <a
    href="https://play.google.com/store/apps/details?id=app.novelty.lendfinex&hl=fr">
    <div class="flex items-center h-full ">
      <div
        class="w-2/3 px-6 py-6 rounded-l-lg text-lg bg-white h-full text-justify">
        <p class="tracking-tight text-sm font-semibold text-gray-700">
          {$_("lendfinex.tag")}
        </p>
        <p class="mt-4 text-right font-semibold text-lg text-gray-800">
          {$_("lendfinex.action")}
        </p>
      </div>
      <div class="w-1/3 px-4">
        <img
          class="mx-auto w-16 h-16"
          src="images/lendfinex.png"
          alt="Lendfinex logo" />
      </div>
    </div>
  </a>
</div>
