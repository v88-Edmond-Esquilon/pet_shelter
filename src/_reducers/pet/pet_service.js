
const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}
const selectedPet = (state, action) => {
    state.selected_pet = state.pet_list.find(pet => pet.id === action.payload);
}

const addNewPet = (state, action) => {
    let new_pet_entry = {...action.payload, id: generateId()};
    state.pet_list.push(new_pet_entry);
}

const editPetDetails = (state, action) => {

}

const setErrorMessage = (state, action) => {
    state.errors[action.payload.field] = action.payload.message;
}

const setFieldValue = (state, action) => {
    void(state[action.payload.field] = action.payload.value);
}

const PetService = {
    selectedPet,
    addNewPet,
    editPetDetails,
    setErrorMessage,
    setFieldValue
}

export default PetService;