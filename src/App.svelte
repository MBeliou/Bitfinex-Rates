<script>
  import Tailwindcss from "./Tailwind.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "components/Footer.svelte";

  //  Locale
  import "./utils/i18n.js";

  import { _, isLoading } from "svelte-i18n";
</script>

<style global>
  body {
    @apply flex flex-col min-h-full m-0  bg-gray-800;
  }

  main {
    @apply bg-gray-800;
    flex: 1 0 auto;
  }
</style>

<Tailwindcss />

{#if !$isLoading}
  <Navbar />

  <main class="px-2 lg:px-0">
    <Router {routes} />
  </main>
  <Footer />
{/if}
