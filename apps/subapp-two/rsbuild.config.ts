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
    port: 7102
  },
  html: {
    title: "subapp-two"
  },
  output: {
    assetPrefix: "/subapp-two/"
  }
});
