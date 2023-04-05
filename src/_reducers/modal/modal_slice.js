import { createSlice } from "@reduxjs/toolkit";
import ModalService    from "./modal_service";

const initialState = {
    show_modal: false,
}
const ModalManagement = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleShowModal: ModalService.togglePetDetailsModal
    }
});

export const {
    toggleShowModal
} = ModalManagement.actions;

export default ModalManagement.reducer;