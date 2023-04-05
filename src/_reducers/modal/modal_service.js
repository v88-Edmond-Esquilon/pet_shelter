const togglePetDetailsModal = (state, action) => {
    state.show_modal = action.payload;
}

const ModalService = {
    togglePetDetailsModal
}

export default ModalService;
