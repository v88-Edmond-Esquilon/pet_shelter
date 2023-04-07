/**
 * DOCU: For toggling add pet page
 * @param {object} state the current state of the modal {clicked_add_pet}
 * @param {object} action contains the state value for the add pet page
 * @author Edmond
 */
const showAddNewPetPage = (state, action) => {
    state.clicked_add_pet = action.payload;
}

/**
 * DOCU: For toggling edit pet page
 * @param {object} state the current state of the modal {clicked_edit_pet}
 * @param {object} action contains the state value for the edit pet page
 * @author Edmond
 */
const showEditPetPage = (state, action) => {
    state.clicked_edit_pet = action.payload;
}

const PageService = {
    showAddNewPetPage,
    showEditPetPage,
}

export default PageService;