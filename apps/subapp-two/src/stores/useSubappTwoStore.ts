import { create } from "zustand";

interface SubappTwoState {
  clicks: number;
  theme: "light" | "dark";
  increase: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useSubappTwoStore = create<SubappTwoState>((set) => ({
  clicks: 0,
  theme: "light",
  increase: () => set((state) => ({ clicks: state.clicks + 1 })),
  setTheme: (theme) => set({ theme })
}));
