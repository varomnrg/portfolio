import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    site: "https://varomnrg.xyz/",
    integrations: [
        sitemap(),
        robotsTxt({
            sitemap: ["https://varomnrg.xyz/sitemap-index.xml", "https://varomnrg.xyz/sitemap-0.xml"],
        }),
        solidJs(),
        UnoCSS({ injectReset: true }),
        icon(),
        svelte(),
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    output: "static",
    vite: {
        assetsInclude: "**/*.riv",
    },
});

