import { create } from "zustand"

const useSettings = create((set) => ({
  showStatusBar: true,
  setShowStatusBar: (value) => set({ showStatusBar: value }),
  backgroundColor: "#fafafa",
  setBackgroundColor: (value) => set({ backgroundColor: value }),
}))

const useActiveButton = create((set) => ({
  activeMenuButton: "Сеты",
  setActiveMenuButton: (val) => set({ activeMenuButton: val }),
  activeNavButton: "Меню",
  setActiveNavButton: (val) => set({ activeNavButton: val }),
  resetActiveButtons: () =>
    set({ activeMenuButton: "Сеты", activeNavButton: "Меню" }),
}))

export { useSettings, useActiveButton }
