import { createSlice } from "@reduxjs/toolkit";
import PageService from "./page_service";

const initialState = {
    clicked_add_pet: {status: false},
    clicked_edit_pet: {status: false, id: ''}
}

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