<script>
  import { _ } from "svelte-i18n";

  const year = (() => {
    const d = new Date();
    return d.getFullYear();
  })();
</script>

<style>
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .text-shadow-md {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .text-shadow-lg {
    text-shadow: 0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08);
  }

  .text-shadow-none {
    text-shadow: none;
  }
</style>

<!-- 
<div class="py-6 px-4 bg-yellow-600">
  <div
    class="max-w-4xl flex flex-col md:flex-row mx-auto text-center items-center">
    <div class="w-1/2">
      <h3 class="text-gray-200 font-semibold text-sm md:text-lg tracking-wide">
        Copyright &copy; {year} - Maxime Bele
      </h3>
    </div>
    <div class="w-1/2 flex-col justify-end">
      <p
        class="text-gray-200 uppercase text-sm md:text-lg font-semibold border-b
        border-gray-300 mx-auto py-4 max-w-auto max-w-xs  md:mt-0 text-shadow">
        {$_('footer.contact')}
      </p>
      <div
        class="mt-4 flex items-center text-2xl text-white max-w-xs
        justify-around mx-auto">
        <a
          class="h-10 w-10 bg-gray-800 rounded-full text-center hover:bg-gray-700"
          href="https://twitter.com/BeleMaxime">
          <span class="icon-twitter" />
        </a>
        <a
          class="h-10 w-10 bg-gray-800 rounded-full text-center hover:bg-gray-700"
          href="https://github.com/MBeliou">
          <span class="icon-github" />
        </a>
      </div>
    </div>
  </div>
</div> -->

<div
  class="py-6 px-4 bg-yellow-600 flex flex-col md:flex-row items-center
  justify-between">

  <h3
    class="text-white text-shadow-md font-semibold text-sm md:text-lg tracking-wide
    flex-grow">
    Copyright &copy; {year} - Maxime Bele
  </h3>

  <div
    class="mt-6 md:mt-0 flex items-center text-2xl text-white max-w-xs
    justify-around mx-auto w-full">
    <a
      class="h-10 w-10 bg-gray-800 rounded-full text-center hover:bg-gray-700"
      href="https://twitter.com/BeleMaxime">
      <span class="icon-twitter" />
    </a>
    <a
      class="h-10 w-10 bg-gray-800 rounded-full text-center hover:bg-gray-700"
      href="https://github.com/MBeliou">
      <span class="icon-github" />
    </a>
  </div>
</div>
