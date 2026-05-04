import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [pluginReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@repo/shared": path.resolve(__dirname, "../../packages/shared/src")
    }
  },
  source: {
    entry: {
      index: "./src/pages/index.tsx"
    }
  },
  server: {
    port: 7101
  },
  html: {
    title: "subapp-one"
  },
  output: {
    assetPrefix: "/subapp-one/"
  }
});
