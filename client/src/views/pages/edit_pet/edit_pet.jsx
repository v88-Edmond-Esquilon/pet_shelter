/** React */
import React, { useState, useEffect } from "react";
/** Redux */
import { useSelector, useDispatch }   from "react-redux";
import { petState }                   from "../../../_actions/user.action";
import { validateField }              from "../../../_helpers/helpers";
/** CSS */
import "./edit_pet.less";

export default function Edit_Pet() {
    const { pet: { selected_pet, errors }} = useSelector(state => state);
    const [ save_changes, setSaveChanges] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(petState.setErrorMessage());
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const fields_to_validate = [
            { name: "pet_type", value: selected_pet.pet_type },
            { name: "pet_description", value: selected_pet.pet_description }
        ];
        
        let error_verifier = {};
        fields_to_validate.forEach(({ name, value }) => {
            const { field, message } = validateField(name, value);
            dispatch(petState.setErrorMessage({ field, message }));
            if (message) {
                error_verifier[field] = message;
            }
        });

        if (!Object.keys(error_verifier).length) {
            dispatch(petState.editPetDetails(selected_pet));
            setSaveChanges(true);
            setTimeout(() => {
                setSaveChanges(false);
            }, 3000);
        }
    } 
 
    return (
        <>
            <form id="edit_pet_form" action="/" method="POST" onSubmit={handleSubmit}>
                <h2>Edit Details: {selected_pet.pet_name}</h2>
                <div className="form_group">
                    <label htmlFor="pet_type ">Pet Type</label>
                    <input 
                        autoFocus 
                        tabIndex={1} 
                        type="text" 
                        className={errors.pet_type? "error" : ""} 
                        id="pet_type" 
                        defaultValue={selected_pet.pet_type} 
                        onChange={(event) => dispatch(petState.setFieldValue({ field: "pet_type", value: event.target.value , type: "edit_pet"}))}
                    />
                    {errors.pet_type && <span className="error_text">{errors.pet_type}</span>}
                </div>
                <div className="form_group">
                    <label htmlFor="pet_description">Description</label>
                    <textarea 
                        tabIndex={2} 
                        className={errors.pet_description? "error" : ""} 
                        id="pet_description" 
                        defaultValue={selected_pet.pet_description}
                        onChange={(event) => dispatch(petState.setFieldValue({ field: "pet_description", value: event.target.value , type: "edit_pet"}))}
                    >
                    </textarea>
                    {errors.pet_description && <span className="error_text">{errors.pet_description}</span>}
                </div>
                <div className="form_group">
                    <label htmlFor="pet_skill">Skills</label>
                    {selected_pet.skills?.map((skill, index) => (
                        <input 
                            key={index} 
                            tabIndex={3+index} 
                            type="text" 
                            id="pet_skill" 
                            defaultValue={skill}
                            onChange={(event) => dispatch(petState.setFieldValue({ field: `skills`, skills_index: index, value: event.target.value , type: "edit_pet"}))}
                        />
                    ))}
                </div>
                <button tabIndex={6} type="submit">Save Changes</button>
            </form>
            <div className={`edit_toast slide_up ${!save_changes? "inactive" : ""}`}> Saved Changes </div>
        </>
    )
}
