# Umi Monorepo 微前端初始化模板

本仓库用于初始化一套 Monorepo 微前端基础工程，包含：

- Umi + React（1 个主应用 + 2 个子应用）
- Qiankun（主子应用集成）
- Rsbuild（严格构建链路）
- Ant Design（`antd`）
- Zustand（各应用本地状态管理）
- React Query（`@tanstack/react-query`，用于服务端状态）
- 共享事件总线（`packages/shared`）

## 工作区目录结构

```text
apps/
  main-shell/
  subapp-one/
  subapp-two/
packages/
  config/
  shared/
```

## 端口分配

- `main-shell`：`7000`
- `subapp-one`：`7101`
- `subapp-two`：`7102`

## 安装依赖

```bash
corepack pnpm install
```

## 开发模式

- 启动所有应用的 Umi 开发模式（推荐，用于 qiankun 联调）：

```bash
corepack pnpm dev
```

- 启动所有应用的 Rsbuild 开发模式：

```bash
corepack pnpm dev:rsbuild
```

## 构建

- 使用 Umi 构建所有应用：

```bash
corepack pnpm build:umi
```

- 使用严格 Rsbuild 构建链路（先构建 shared 包，再构建所有应用）：

```bash
corepack pnpm build
```

## 代码检查

```bash
corepack pnpm lint
```

## 状态与通信边界约定

- 子应用业务状态仅放在各自的 `zustand` store 内。
- 跨应用共享状态仅建议放会话级元信息（如用户、主题、语言）。
- 接口数据统一由 `react-query` 管理，不放入事件总线。
- 事件总线只传递事件，不传大体量业务对象，降低耦合。

## 共享事件总线

`packages/shared/src/event-bus.ts` 中基于 `mitt` 定义了类型化事件总线。

当前已定义事件：

- `USER_UPDATED`
- `THEME_CHANGED`
- `LANG_CHANGED`

## 验证清单

- 主应用可加载 `subapp-one` 与 `subapp-two`。
- 两个子应用均可独立启动访问。
- 主子应用中的 `antd` 样式显示正常。
- 各子应用内 `zustand` 状态工作正常且互不干扰。
- 主子应用中的 React Query 请求逻辑可正常运行。
- 主题切换事件可通过 shared event bus 在主子应用间传递。

## 说明

- 某些三方依赖的 peer warning 来自 Umi 插件生态，通常不影响本模板运行和构建。
- Rsbuild 可能提示 `rsbuild.config.ts` 的 module type 警告，该提示不影响构建结果。
