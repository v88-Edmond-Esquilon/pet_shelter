import React from "react";
import { useNavigate } from "react-router-dom";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { petState } from "../../../_actions/user.action";
/** Helper */
import { validateField } from "../../../_helpers/helpers";
/**CSS */
import "./add_pet.less";


export default function Add_Pet() {
    const { pet: { pet_name, pet_description, pet_type, errors, skill_1, skill_2, skill_3, pet_list }} = useSelector(state => state);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const fields_to_validate = [
            { name: "pet_name", value: pet_name },
            { name: "pet_type", value: pet_type },
            { name: "pet_description", value: pet_description }
        ];
        
        let error_verifier = {};
        fields_to_validate.forEach(({ name, value }) => {
            const { field, message } = validateField(name, value);
            dispatch(petState.setErrorMessage({ field, message }));
            if (message) {
                error_verifier[field] = message;
            }
        });
        
        if (Object.keys(error_verifier).length === 0) {
            dispatch(petState.addNewPet({
                pet_name: pet_name,
                pet_type: pet_type,
                pet_description: pet_description,
                skills: [skill_1, skill_2, skill_3],
                likes: 0
            }));
        
            const field = ["pet_name", "pet_type", "pet_description", "skill_1", "skill_2", "skill_3"];
        
            field.forEach(field_name => {
                dispatch(petState.setFieldValue({field: field_name, value: ""}));
            });
            navigate("/");
        }
    }

    return (
        < form id="add_pet_form" action="/" method="POST" onSubmit={ handleSubmit}>
            <div className="form_group">
                <label htmlFor="pet_name">Pet Name</label>
                <input 
                    autoFocus 
                    className={errors.pet_name? "error" : ""} 
                    tabIndex={1} type="text" 
                    id="pet_name" 
                    value={pet_name} 
                    onChange={(event) => dispatch(petState.setFieldValue({field: "pet_name", value: event.target.value}))}
                />
                {errors.pet_name &&  <span className="error_text">{errors.pet_name}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="select_pet_type">Pet Type </label>
                <input 
                    list="options" 
                    id="select_pet_type" 
                    className={errors.pet_type? "error" : ""} 
                    tabIndex={2} 
                    value={pet_type} 
                    onChange={event => dispatch(petState.setFieldValue({field: "pet_type", value: event.target.value}))}
                />
                <datalist id="options">
                    <option value="Pig">Pig</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </datalist>
                {errors.pet_type && <span className="error_text">{errors.pet_type}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="pet_description">Description</label>
                <textarea 
                    tabIndex={3} 
                    className={errors.pet_description? "error" : ""} 
                    value={pet_description} id="pet_description" 
                    onChange={event => dispatch(petState.setFieldValue({field: "pet_description", value: event.target.value}))}
                ></textarea>
                {errors.pet_description && <span className="error_text">{errors.pet_description}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="pet_skill">Skills</label>
                <input tabIndex={4} value={skill_1} onChange={(event) => dispatch(petState.setFieldValue({field: "skill_1", value: event.target.value}))} type="text"/>
                <input tabIndex={5} value={skill_2} onChange={(event) => dispatch(petState.setFieldValue({field: "skill_2", value: event.target.value}))} type="text"/>
                <input tabIndex={6} value={skill_3} onChange={(event) => dispatch(petState.setFieldValue({field: "skill_3", value: event.target.value}))} type="text"/>
            </div>
            <button tabIndex={7} type="submit">Add Pet</button>
        </form>
    )
}
