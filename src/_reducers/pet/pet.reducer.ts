import { createSlice } from "@reduxjs/toolkit";
import PetService      from "./pet_service";

export interface PetState {
    pet_list: Array<any>;
    errors: object;
    pet_name: string;
    pet_type: string;
    pet_description: string;
    skill_1: string;
    skill_2: string;
    skill_3: string;
    like: boolean;
    selected_pet: object;
    saved_changes: boolean;
}

const initialState: PetState = {
    pet_list: [],
    errors: {},
    pet_name: '',
    pet_type: '',
    pet_description: '',
    skill_1: '',
    skill_2: '',
    skill_3: '',
    like: false,
    selected_pet: {},
    saved_changes: false
};


const PetManagement =  createSlice({
    name: "pet",
    initialState,
    reducers: {
        addNewPet         : PetService.addNewPet,
        editPetDetails    : PetService.editPetDetails,
        setErrorMessage   : PetService.setErrorMessage,
        setFieldValue     : PetService.setFieldValue,
        selectedPet       : PetService.selectedPet,
        likedPet          : PetService.likedPet,
        adoptPet          : PetService.adoptPet
    }
});

export const {
    addNewPet,
    editPetDetails,
    setErrorMessage,
    setFieldValue,
    selectedPet,
    likedPet,
    adoptPet
} = PetManagement.actions;

export default PetManagement.reducer;