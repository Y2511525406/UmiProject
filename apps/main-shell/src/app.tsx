import "antd/dist/reset.css";

import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { getEventBus } from "@repo/shared";

import { queryClient } from "./services/query-client";

export const rootContainer = (container: ReactNode) => {
  return <QueryClientProvider client={queryClient}>{container}</QueryClientProvider>;
};

export const qiankun = {
  apps: [
    {
      name: "subapp-one",
      entry: "//localhost:7101",
      activeRule: "/subapp-one",
      props: {
        eventBus: getEventBus()
      }
    },
    {
      name: "subapp-two",
      entry: "//localhost:7102",
      activeRule: "/subapp-two",
      props: {
        eventBus: getEventBus()
      }
    }
  ]
};
