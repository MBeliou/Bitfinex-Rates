<script>
  import Tailwindcss from "./Tailwind.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "components/Footer.svelte";
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

<Navbar />
<main>
  <Router {routes} />
</main>
<Footer />
