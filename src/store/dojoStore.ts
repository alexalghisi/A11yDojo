import { create } from "zustand";
import { LEVELS, type FixId } from "@/lib/a11y";

interface DojoState {
  index: number;
  enabled: FixId[];
  toggle: (id: FixId) => void;
  next: () => void;
  reset: () => void;
}

export const useDojoStore = create<DojoState>((set, get) => ({
  index: 0,
  enabled: [],
  toggle: (id) => {
    const enabled = get().enabled;
    set({
      enabled: enabled.includes(id) ? enabled.filter((item) => item !== id) : [...enabled, id],
    });
  },
  next: () =>
    set((state) => ({ index: Math.min(state.index + 1, LEVELS.length - 1), enabled: [] })),
  reset: () => set({ index: 0, enabled: [] }),
}));
