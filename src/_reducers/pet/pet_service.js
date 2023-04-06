
const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}
const selectedPet = (state, action) => {
    state.selected_pet = state.pet_list.find(pet => pet.id === action.payload);
}
const addNewPet = (state, action) => {
    let new_pet_entry = {...action.payload, id: generateId()};
    let updatedPetList = state.pet_list.concat(new_pet_entry);

    // Sort the updatedPetList array alphabetically by pet_type
    updatedPetList.sort(function(a, b) {
        if (a.pet_type < b.pet_type) {
            return -1;
        }
        if (a.pet_type > b.pet_type) {
            return 1;
        }
        return 0;
    });

    return {...state, pet_list: updatedPetList};
}



const likedPet = (state, action) => {
    const { id, key, value } = action.payload;
    const index = state.pet_list.findIndex(pet => pet.id === id);

    if (index !== -1) {
        const updatedPet = {
            ...state.pet_list[index],
            [key]: value
        };

        const updatedPetList = [
            ...state.pet_list.slice(0, index),
            updatedPet,
            ...state.pet_list.slice(index + 1)
        ];

        return {
            ...state,
            pet_list: updatedPetList,
            selected_pet: {
                ...state.selected_pet,
                like: value
            }
        };
    }
    return state;
}

const adoptPet = (state, action) => {
    const id = action.payload;
    const updated_pet_list = state.pet_list.filter(pet => pet.id !== id);

    return {
        ...state,
        pet_list: updated_pet_list
    };
}


const editPetDetails = (state, action) => {
    const index = state.pet_list.findIndex(pet => pet.id === action.payload.id);
    if (index !== -1) {
        return {
            ...state,
            pet_list: state.pet_list.map((pet, i) => {
                if (i === index) {
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

const setErrorMessage = (state, action) => {
        if (action.payload) {
            state.errors[action.payload.field] = action.payload.message;
        } else {
            state.errors = {};
        }
  };
  

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
            void(state[action.payload.field] = action.payload.value);
            break;
        default:
            return state;
    }
}

const PetService = {
    selectedPet,
    addNewPet,
    editPetDetails,
    setErrorMessage,
    setFieldValue,
    likedPet,
    adoptPet
}

export default PetService;