import { defineConfig } from "umi";
import path from "node:path";

export default defineConfig({
  npmClient: "pnpm",
  plugins: ["@umijs/plugins/dist/qiankun"],
  alias: {
    "@repo/shared": path.resolve(__dirname, "../../../packages/shared/src")
  },
  history: { type: "browser" },
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/subapp-one", microApp: "subapp-one" },
    { path: "/subapp-two", microApp: "subapp-two" }
  ],
  qiankun: {
    master: {}
  },
  esbuildMinifyIIFE: true
});
