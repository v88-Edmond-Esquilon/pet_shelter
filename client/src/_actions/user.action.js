import { showAddNewPetPage, showEditPetPage } from "../_reducers/page/page.reducer";
import { togglePetDetailsModal } from "../_reducers/modal/modal.reducer";
import { setFieldValue, addNewPet, setErrorMessage, selectedPet, editPetDetails, likedPet, adoptPet } from "../_reducers/pet/pet.reducer";

export const pageState = {
    showAddNewPetPage: (params) => {
        return (dispatcher) => {
            dispatcher(showAddNewPetPage(params));
        }
    },
    showEditPetPage: (params) => {
        return (dispatcher) => {
            dispatcher(showEditPetPage(params));
        }
    }
}

export const modalState = {
    togglePetDetailsModal: (params) => {
        return (dispatcher) => {
            dispatcher(togglePetDetailsModal(params));
        }
    }
}

export const petState = {
    setFieldValue: (params) => {
        return (dispatcher) => {
            dispatcher(setFieldValue(params));
        }
    },
    addNewPet: (params) => {
        return (dispatcher) => {
            dispatcher(addNewPet(params));
        }
    },
    setErrorMessage: (params) => {
        return (dispatcher) => {
            dispatcher(setErrorMessage(params));
        }
    },
    selectedPet: (params) => {
        return (dispatcher) => {
            dispatcher(selectedPet(params));
        }
    },
    editPetDetails: (params) => {
        return (dispatcher) => {
            dispatcher(editPetDetails(params));
        }
    },
    likedPet: (params) => {
        return (dispatcher) => {
            dispatcher(likedPet(params));
        }
    },
    adoptPet: (params) => {
        return (dispatcher) => {
            dispatcher(adoptPet(params));
        }
    }
}