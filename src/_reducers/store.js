import { configureStore } from "@reduxjs/toolkit";
import PetManagement      from "./pet/pet_slice.js";
import PageManagement     from "./page/page_slice.js";
import ModalManagement    from "./modal/modal_slice.js";

export const store = configureStore({
    reducer: {
        page:  PageManagement,
        modal: ModalManagement,
        pet:   PetManagement
    }
});