import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  server: {
    // Utilisation du port personnalisé
    port: 4321,
    // Activer le rechargement automatique des modules
    hmr: true,
    host: true,  // Permet d'utiliser localhost ou une adresse réseau (utile si tu utilises un réseau local)
  },
});
