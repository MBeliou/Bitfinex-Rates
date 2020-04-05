import { register, init, getLocaleFromNavigator, locale } from "svelte-i18n";

register("en", () => import("./lang/en.json"));
register("fr", () => import("./lang/fr.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
  loadingDelay: 500
});

//locale.set("fr");
