
import { produce } from 'immer';

/**
 * DOCU: For generating an id using date and a random number
 * @returns number id
 * @author Edmond
 */
const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}

/**
 * DOCU: For storing the selected pet using its id to be founnd in the pet_list
 * @param {object} state the current state for storing the selected pet {selected_pet}
 * @param {object} action contains the id of the selected pet
 * @author Edmond
 */
const selectedPet = (state, action) => {
    state.selected_pet = state.pet_list.find(pet => pet.id === action.payload);
}

/**
 * DOCU: for adding a new pet object in the state array pet_list and also being sorted using the immer library
 * @param {object} state the current state for storing the details data of the pet {pet_list}
 * @param {object} action contains the object of the input values from the user
 * @returns the updated/sorted pet_list
 * @author Edmond
 */
const addNewPet = (state, action) => {
  const new_pet_entry = { ...action.payload, id: generateId() };

    const updatedState = produce(state, (draft_state) => {
        draft_state.pet_list.push(new_pet_entry);

        draft_state.pet_list.sort((a, b) => {
            if (a.pet_type < b.pet_type) {
                return -1;
            }
            if (a.pet_type > b.pet_type) {
                return 1;
            }
            return 0;
        });
    });

    return updatedState;
};

/**
 * DOCU: Updates the like key of the pet if the user toggles it
 * @param {object} state will get the state for the pet list and selected pet {pet_list, selected_pet}
 * @param {object} action contains the id for the specified pet
 * @returns the updated state for the pet_list which has the like key is updated
 */
const likedPet = (state, action) => {
    const selected_pet_id  = action.payload;
    const updated_pet_list = state.pet_list.map(pet => {
        if (pet.id === selected_pet_id) {
            return {
                ...pet,
                like: true
            };
        }
        return pet;
    });

    return {
        ...state,
        pet_list: updated_pet_list,
        selected_pet: {
            ...state.selected_pet,
            like: true
        }
    };
}

/**
 * DOCU: Deletes the pet object in the pet if the user clicks the adopt button in the modal
 * @param {object} state gets the state of pet_list {pet_list}
 * @param {object} action contains the id for the specific pet that has been adopted
 * @returns updates the state of pet_list
 * @author Edmond
 */
const adoptPet = (state, action) => {
    const id = action.payload;
    const updated_pet_list = state.pet_list.filter(pet => pet.id !== id);

    return {
        ...state,
        pet_list: updated_pet_list
    };
}

/**
 * DOCU: update the pet_list with the selected pet
 * @param {object} state gets the state for the pet_list {pet_list}
 * @param {object} action contains the id for the selected pet
 * @returns returns the updated state for pet_list
 * @author Edmond
 */
const editPetDetails = (state, action) => {
    const index = state.pet_list.findIndex(pet => pet.id === action.payload.id);
    if (index !== -1) {
        return {
            ...state,
            pet_list: state.pet_list.map((pet, pet_index) => {
                if (pet_index === index) {
                    return {
                        ...pet,
                        pet_type: action.payload.pet_type,
                        pet_description: action.payload.pet_description,
                        skills: [...action.payload.skills]
                    };
                } else {
                    return pet;
                }
            })
        };
    } else {
        return state;
    }
}

/**
 * DOCU: Sets the error message in the errors state
 * @param {object} state save the field name to be a object key
 * @param {object} action gets the error message 
 * @author Edmond
 */
const setErrorMessage = (state, action) => {
        if (action.payload) {
            state.errors[action.payload.field] = action.payload.message;
        } else {
            state.errors = {};
        }
  };
  
/**
 * DOCU: set the values of the temporary variables for getting the values and validation of the strings as well
 * @param {object} state state for getting the selected pet 
 * @param {object} action get the field values for the temporary variables
 * @returns returns the state object for the errors received base on the field also updates the temporary value containers
 * @author Edmond
 */
const setFieldValue = (state, action) => {
    switch (action.payload.type) {
        case "edit_pet":
            const { field, skills_index, value } = action.payload;

            if (field === "skills") {
                return {
                    ...state,
                    selected_pet: {
                        ...state.selected_pet,
                        [field]: state.selected_pet[field].map((skill, index) => {
                            if (index === skills_index) {
                                return value; 
                            } else {
                                return skill;
                            }
                        }),
                    },
                };
            } else {
                return {
                    ...state,
                    selected_pet: {
                        ...state.selected_pet,
                        [field]: value,
                    },
                };
            }
        case "add_pet":
           return void(state[action.payload.field] = action.payload.value);      
        default:
            return state;
    }
}

/** 
 * DOCU: Updates the pet_list state to all connected users in the socket
 * @param {object} state contains the pet_list state
 * @param {object} action receives the latest updated array of pet_list
 * @returns the updated state of pet_list
 * @author Edmond
 */
const updatePetList = (state, action) => {
    return {...state, pet_list: action.payload}
};

const PetService = {
    selectedPet,
    addNewPet,
    editPetDetails,
    setErrorMessage,
    setFieldValue,
    likedPet,
    adoptPet,
    updatePetList
}

export default PetService;