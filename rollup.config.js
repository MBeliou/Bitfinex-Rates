import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import alias from "@rollup/plugin-alias";
import cleaner from "rollup-plugin-cleaner";
import gzipPlugin from "rollup-plugin-gzip";
import modulepreload from "rollup-plugin-modulepreload";
import copy from "rollup-plugin-copy";
import svelteSVG from "rollup-plugin-svelte-svg";
import json from '@rollup/plugin-json';


const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "esm",
    name: "app",
    dir: "dist/build"
  },
  moduleContext: id => {
    // In order to match native module behaviour, Rollup sets `this`
    // as `undefined` at the top level of modules. Rollup also outputs
    // a warning if a module tries to access `this` at the top level.
    // The following modules use `this` at the top level and expect it
    // to be the global `window` object, so we tell Rollup to set
    // `this = window` for these modules.
    const thisAsWindowForModules = [
      "node_modules/intl-messageformat/lib/core.js",
      "node_modules/intl-messageformat/lib/compiler.js",
      "node_modules/intl-format-cache/lib/index.js",

      "node_modules/intl-messageformat/lib/formatters.js",
      "node_modules/intl-messageformat-parser/lib/normalize.js",
      "node_modules/intl-messageformat-parser/lib/parser.js",
      "node_modules/intl-messageformat-parser/lib/skeleton.js",

      "node_modules\\intl-messageformat\\lib\\core.js",
      "node_modules\\intl-messageformat\\lib\\compiler.js",
      "node_modules\\intl-format-cache\\lib\\index.js",

      "node_modules\\intl-messageformat\\lib\\formatters.js",
      "node_modules\\intl-messageformat-parser\\lib\\normalize.js",
      "node_modules\\intl-messageformat-parser\\lib\\parser.js",
      "node_modules\\intl-messageformat-parser\\lib\\skeleton.js",
    ];

    // console.log(
    //   id,
    //   thisAsWindowForModules.some(id_ => id.includes(id_))
    // );

    //if (thisAsWindowForModules.some(id_ => id.trimRight().endsWith(id_))) {
    //console.log("Found module for this");
    if (thisAsWindowForModules.some(id_ => id.includes(id_))) {
      return "window";
    }
  },
  plugins: [
    cleaner({
      targets: ["./dist"]
    }),
    copy({
      targets: [{ src: "public/*", dest: "dist" }]
    }),
    alias({
      entries: [
        { find: "utils", replacement: "./src/utils" },
        { find: "pages", replacement: "./src/pages" },
        { find: "components", replacement: "./src/components" }
      ]
    }),
    svelteSVG(),
    json(),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      preprocess: sveltePreprocess({ postcss: true }),
      css: css => {
        css.write("dist/css/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: importee =>
        importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser({}),

    production &&
      gzipPlugin({
        additionalFiles: ["./dist/css/global.css", "./dist/css/bundle.css"]
      }),

    production &&
      modulepreload({
        prefix: "build",
        index: "dist/index.html",
        shouldPreload: ({ fileName }) =>
          fileName.includes("index") && !fileName.includes("gz")
      })
  ],
  watch: {
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}
