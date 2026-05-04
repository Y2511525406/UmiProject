import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ShellState {
  theme: ThemeMode;
  username: string;
  setTheme: (theme: ThemeMode) => void;
  setUsername: (username: string) => void;
}

export const useShellStore = create<ShellState>((set) => ({
  theme: "light",
  username: "Guest",
  setTheme: (theme) => set({ theme }),
  setUsername: (username) => set({ username })
}));
