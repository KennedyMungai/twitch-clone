import { create } from 'zustand'

interface ISideBarStore {
	collapsed: boolean
	onExpand: () => void
	onCollapse: () => void
}

export const useSideBar = create<ISideBarStore>((set) => ({
	collapsed: false,
	onExpand: () => set({ collapsed: false }),
	onCollapse: () => set({ collapsed: true })
}))
