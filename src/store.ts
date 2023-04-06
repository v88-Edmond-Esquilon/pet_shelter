import { configureStore } from "@reduxjs/toolkit";
import PageManagement from "./_reducers/page/page.reducer";
import ModalManagement from "./_reducers/modal/modal.reducer";
import PetManagement from "./_reducers/pet/pet.reducer";

export const store = configureStore({
    reducer: {
        page: PageManagement,
        modal: ModalManagement,
        pet: PetManagement
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;