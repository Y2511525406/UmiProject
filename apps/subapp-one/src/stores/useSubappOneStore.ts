import { create } from "zustand";

interface SubappOneState {
  count: number;
  theme: "light" | "dark";
  increment: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useSubappOneStore = create<SubappOneState>((set) => ({
  count: 0,
  theme: "light",
  increment: () => set((state) => ({ count: state.count + 1 })),
  setTheme: (theme) => set({ theme })
}));
