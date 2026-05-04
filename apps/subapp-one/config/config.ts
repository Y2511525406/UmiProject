import { defineConfig } from "umi";
import path from "node:path";

export default defineConfig({
  npmClient: "pnpm",
  plugins: ["@umijs/plugins/dist/qiankun"],
  alias: {
    "@repo/shared": path.resolve(__dirname, "../../../packages/shared/src")
  },
  history: { type: "browser" },
  base: "/subapp-one/",
  publicPath: "/subapp-one/",
  routes: [{ path: "/", component: "@/pages/index" }],
  qiankun: {
    slave: {}
  }
});
