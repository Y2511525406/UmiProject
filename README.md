# Umi Monorepo Micro Frontend Starter

This repository initializes a monorepo micro frontend baseline with:

- Umi + React (main shell + 2 subapps)
- Qiankun (master/slave integration)
- Rsbuild (strict build pipeline)
- Ant Design (`antd`)
- Zustand (local state in each app)
- React Query (`@tanstack/react-query`) for server state
- Shared event bus (`packages/shared`)

## Workspace Structure

```text
apps/
  main-shell/
  subapp-one/
  subapp-two/
packages/
  config/
  shared/
```

## Port Allocation

- `main-shell`: `7000`
- `subapp-one`: `7101`
- `subapp-two`: `7102`

## Install

```bash
corepack pnpm install
```

## Development

- Start Umi dev for all apps (recommended for qiankun integration):

```bash
corepack pnpm dev
```

- Start Rsbuild dev for all apps:

```bash
corepack pnpm dev:rsbuild
```

## Build

- Umi build for all apps:

```bash
corepack pnpm build:umi
```

- Strict Rsbuild pipeline (shared package first, then all apps):

```bash
corepack pnpm build
```

## Lint

```bash
corepack pnpm lint
```

## State and Communication Boundaries

- Subapp business state lives in local `zustand` stores.
- Cross-app shared state should be session-level metadata only.
- API data is managed by `react-query`, not the event bus.
- Event bus passes events, not large business payloads.

## Shared Event Bus

`packages/shared/src/event-bus.ts` defines a typed event bus based on `mitt`.

Current shared events:

- `USER_UPDATED`
- `THEME_CHANGED`
- `LANG_CHANGED`

## Verification Checklist

- Main shell can load `subapp-one` and `subapp-two`.
- Each subapp can run independently.
- `antd` styles are available in shell and subapps.
- Zustand state works independently inside each subapp.
- React Query hooks run correctly in shell and subapps.
- Shared event bus can propagate theme changes.

## Notes

- Some transitive peer dependency warnings come from the Umi plugin ecosystem and do not block build/run in this starter.
- Rsbuild may print Node warning about module type for `rsbuild.config.ts`; this does not block builds.
