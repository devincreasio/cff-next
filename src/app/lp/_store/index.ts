import { create } from 'zustand'

interface ModalState {
    isOpen: boolean
    setModalOpen: (isOpen: boolean) => void
}

export const useModalStore = create<ModalState>()((set) => ({
    isOpen: false,
    setModalOpen: (isOpen: boolean) => {
        set({ isOpen })
    },
}))
