import mitt, { type Emitter } from "mitt";

export type SharedEvents = {
  USER_UPDATED: { id: string; name: string };
  THEME_CHANGED: { theme: "light" | "dark" };
  LANG_CHANGED: { lang: "zh-CN" | "en-US" };
};

let emitter: Emitter<SharedEvents> | null = null;

export const getEventBus = (): Emitter<SharedEvents> => {
  if (!emitter) {
    emitter = mitt<SharedEvents>();
  }
  return emitter;
};
