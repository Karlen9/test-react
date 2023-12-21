import { create } from 'zustand'

type Store = {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

export const useStore = create<Store>()((set) => ({
  collapsed: true,
  setCollapsed: (value) => set(() => ({ collapsed: value }))
}))
