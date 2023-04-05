
const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}
const loadPetList = (state) => {

}

const viewPetDetails = (state, action) => {

}

const addNewPet = (state, action) => {

}

const editPetDetails = (state, action) => {

}

const setErrorMessage = (state, action) => {
    state.errors[action.payload.field] = action.payload.message;
}

const PetService = {
    generateId,
    loadPetList,
    viewPetDetails,
    addNewPet,
    editPetDetails,
    setErrorMessage
}

export default PetService;