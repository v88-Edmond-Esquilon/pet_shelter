import { createSlice } from "@reduxjs/toolkit";
import PetService      from "./pet_service";


const initialState = {
    pet_list: [],
    errors: {},
    pet_name: '',
    pet_type: '',
    pet_description: ''
}

const PetManagement =  createSlice({
    name: "pet",
    initialState,
    reducers: {
        loadPetList       : PetService.loadPetList,
        viewPetDetails    : PetService.viewPetDetails,
        addNewPet         : PetService.addNewPet,
        editPetDetails    : PetService.editPetDetails,
        setErrorMessage   : PetService.setErrorMessage,
        setPetName        : (state, action) => void(state.pet_name = action.payload),
        setPetType        : (state, action) => void(state.pet_type = action.payload),
        setPetDescription : (state, action) => void(state.pet_description = action.payload)
    }
});

export const {
    loadPetList,
    viewPetDetails,
    addNewPet,
    editPetDetails,
    setErrorMessage,
    setPetName,
    setPetDescription,
    setPetType
} = PetManagement.actions;

export default PetManagement.reducer;