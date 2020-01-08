import Home from "./routes/Home.svelte";
import Random from "./routes/Random.svelte";
import Hello from "./routes/Hello.svelte";

const routes = {
  "/": Home,
  "/random": Random,
  "/hello/:name?": Hello
};

export default routes;