import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { petState } from "../../../_actions/user.action";
/** Helper */
import { validateField } from "../../../_helpers/helpers";
/**CSS */
import "./add_pet.less";


export default function Add_Pet() {
    const { pet: { pet_name, pet_description, pet_type, errors, skill_1, skill_2, skill_3, like }} = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const field_names = ['skill_1', 'skill_2', 'skill_3'];

    useEffect(() => {
        dispatch(petState.setErrorMessage());
    }, []);

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
        
        if (!Object.keys(error_verifier).length) {
            dispatch(petState.addNewPet({
                pet_name: pet_name,
                pet_type: pet_type,
                pet_description: pet_description,
                skills: [skill_1, skill_2, skill_3],
                likes: like
            }));
            const field = ["pet_name", "pet_type", "pet_description", "skill_1", "skill_2", "skill_3"];

            field.forEach(field_name => {
                dispatch(petState.setFieldValue({field: field_name, value: "", type: "add_pet"}));
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
                    defaultValue={pet_name} 
                    onChange={(event) => dispatch(petState.setFieldValue({field: "pet_name", value: event.target.value, type: "add_pet"}))}
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
                    defaultValue={pet_type} 
                    onChange={event => dispatch(petState.setFieldValue({field: "pet_type", value: event.target.value, type: "add_pet"}))}
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
                    defaultValue={pet_description} id="pet_description" 
                    onChange={event => dispatch(petState.setFieldValue({field: "pet_description", value: event.target.value, type: "add_pet"}))}
                ></textarea>
                {errors.pet_description && <span className="error_text">{errors.pet_description}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="pet_skill">Skills</label>
                {field_names.map((field_name, index) => (
                    <input
                        key={field_name}
                        tabIndex={index + 4}
                        defaultValue={''}
                        type="text"
                        onChange={(event) =>
                            dispatch(
                            petState.setFieldValue({
                                field: field_name,
                                value: event.target.value,
                                type: 'add_pet',
                            }))}
                    />
                ))}
            </div>
            <button tabIndex={7} type="submit">Add Pet</button>
        </form>
    )
}
