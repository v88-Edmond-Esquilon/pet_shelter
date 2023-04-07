import { createSlice } from "@reduxjs/toolkit";
import PageService     from "./page_service";

export interface PageState {
    clicked_add_pet: boolean;
    clicked_edit_pet: boolean;
}

const initialState: PageState = {
    clicked_add_pet: false,
    clicked_edit_pet: false
};

const PageManagement =  createSlice({
    name: "page",
    initialState,
    reducers: {
        showAddNewPetPage : PageService.showAddNewPetPage,
        showEditPetPage   : PageService.showEditPetPage
    }
}); 

export const {
    showAddNewPetPage,
    showEditPetPage
} = PageManagement.actions;

export default PageManagement.reducer;