const showAddNewPetPage = (state, action) => {
    state.clicked_add_pet = action.payload;
}

const showEditPetPage = (state, action) => {
    state.clicked_edit_pet = action.payload;
}

const PageService = {
    showAddNewPetPage,
    showEditPetPage,
}

export default PageService;