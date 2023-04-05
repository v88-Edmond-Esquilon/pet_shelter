import React from "react";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { addNewPet, setErrorMessage, setPetName, setPetType, setPetDescription } from "../../../_reducers/pet/pet_slice";
/**CSS */
import "./add_pet.less";


export default function Add_Pet() {
    const pet_name        = useSelector(state => state.pet.pet_name);
    const pet_description = useSelector(state => state.pet.pet_description);
    const pet_type        = useSelector(state => state.pet.pet_type);
    const errors          = useSelector(state => state.pet.errors);
    const dispatch        = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(pet_name.length < 3){
            dispatch(setErrorMessage({ field: "pet_name", message: "Pet name must be at least 3 characters."}));
            return;
        }
    }

    return (
        < form id="add_pet_form" action="/" method="POST" onSubmit={ handleSubmit}>
            <div className="form_group">
                <label htmlFor="pet_name">Pet Name</label>
                <input autoFocus className={errors.pet_name? "error" : ""} tabIndex={1} type="text" id="pet_name" value={pet_name} onChange={(event) => dispatch(setPetName(event.target.value))}/>
                {errors.pet_name &&  <span className="error_text">{errors.pet_name}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="select_pet_type">Pet Type </label>
                <input list="options" id="select_pet_type" className={errors.pet_type? "error" : ""} tabIndex={2} value={pet_type} onChange={event => dispatch(setPetType(event.target.value))} />
                <datalist id="options">
                    <option value="Pig">Pig</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                </datalist>
                {errors.pet_type && <span className="error_text">{errors.pet_type}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="pet_description">Description</label>
                <textarea tabIndex={3} className={errors.pet_description? "errors" : ""} value={pet_description} id="pet_description" onChange={event => dispatch(setPetDescription(event.target.value))}></textarea>
                {errors.pet_description && <span className="error_text">{errors.pet_description}</span>}
            </div>
            <div className="form_group">
                <label htmlFor="pet_skill">Skills</label>
                <input tabIndex={4} type="text"/>
                <input tabIndex={5} type="text"/>
                <input tabIndex={6} type="text"/>
            </div>
            <button tabIndex={7} type="submit">Add Pet</button>
        </form>
    )
}
