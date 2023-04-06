import { createSlice }        from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ModalService           from "./modal_service";

export interface ModalState {
    show_modal: boolean;
}

const initialState: ModalState = {
    show_modal: false,
}
const ModalManagement = createSlice({
    name: "modal",
    initialState,
    reducers: {
        togglePetDetailsModal: ModalService.togglePetDetailsModal
    }
});

export const {
    togglePetDetailsModal
} = ModalManagement.actions;

export default ModalManagement.reducer;