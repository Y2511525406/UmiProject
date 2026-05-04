import "antd/dist/reset.css";

import { QueryClientProvider } from "@tanstack/react-query";
import type { SharedEvents } from "@repo/shared";
import { getEventBus } from "@repo/shared";
import type { Emitter } from "mitt";
import type { ReactNode } from "react";
import { useSubappTwoStore } from "@/stores/useSubappTwoStore";

import { queryClient } from "./services/query-client";

export const rootContainer = (container: ReactNode) => {
  return <QueryClientProvider client={queryClient}>{container}</QueryClientProvider>;
};

type QiankunProps = {
  eventBus?: Emitter<SharedEvents>;
};

let externalEventBus: Emitter<SharedEvents> | undefined;

const onThemeChanged = ({ theme }: SharedEvents["THEME_CHANGED"]) => {
  useSubappTwoStore.getState().setTheme(theme);
};

export const qiankun = {
  async bootstrap() {
    // no-op bootstrap for qiankun lifecycle completeness
  },
  async mount(props: QiankunProps) {
    externalEventBus = props.eventBus;
    externalEventBus?.on("THEME_CHANGED", onThemeChanged);
  },
  async unmount() {
    externalEventBus?.off("THEME_CHANGED", onThemeChanged);
  }
};

if (!(window as Window & { __POWERED_BY_QIANKUN__?: boolean }).__POWERED_BY_QIANKUN__) {
  const bus = getEventBus();
  bus.on("THEME_CHANGED", onThemeChanged);
}
