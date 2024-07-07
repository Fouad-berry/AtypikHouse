import { create } from "zustand";

interface useEquipementModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useEquipementModal = create<useEquipementModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useEquipementModal;
