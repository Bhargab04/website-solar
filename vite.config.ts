import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: process.env.VERCEL === "1" ? false : undefined,
  tanstackStart: {
    prerender: {
      enabled: true,
    },
  },
});
