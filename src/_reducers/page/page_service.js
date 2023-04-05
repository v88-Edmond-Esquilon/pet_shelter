const showAddNewPetPage = (state, action) => {
    state.clicked_add_pet.status = action.payload;
}

const showEditPetPage = (state, action) => {
    state.clicked_edit_pet.status = action.payload;
}

const showHomePage = (state, action) => {

}

const PageService = {
    showAddNewPetPage,
    showEditPetPage,
    showHomePage
}

export default PageService;