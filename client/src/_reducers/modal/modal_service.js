/**
 * DOCU: For toggling modal edit details
 * @param {object} state the current state of the modal {show_modal}
 * @param {object} action contains the state value for the modal
 * @author Edmond
 */
const togglePetDetailsModal = (state, action) => {
    state.show_modal = action.payload;
}

const ModalService = {
    togglePetDetailsModal
}

export default ModalService;
