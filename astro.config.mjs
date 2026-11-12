import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ananya-asthana.vercel.app",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
