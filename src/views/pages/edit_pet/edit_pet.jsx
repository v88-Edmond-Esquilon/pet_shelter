import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./edit_pet.less";

export default function Edit_Pet() {
    const { pet: { selected_pet }} = useSelector(state => state);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selected_pet)
    } 
   
    return (
        <>
            <form id="edit_pet_form" action="/" method="POST" onSubmit={handleSubmit}>
                <h2>Edit Details: {selected_pet.pet_name}</h2>
                <div className="form_group">
                    <label htmlFor="pet_name ">Pet Type</label>
                    <input autoFocus tabIndex={1} type="text" id="pet_name" name="pet_name" defaultValue={selected_pet.pet_type} onChange={() => {}}/>
                    <span className="error_text">Sample Error</span>
                </div>
                <div className="form_group">
                    <label htmlFor="pet_description">Description</label>
                    <textarea tabIndex={2} name="pet_descrition" id="pet_description" defaultValue={selected_pet.pet_description}></textarea>
                    <span className="error_text">Sample Error</span>
                </div>
                <div className="form_group">
                    <label htmlFor="pet_skill">Skills</label>
                    {selected_pet.skills.map((skill, index) => (
                        <input key={index} tabIndex={3+index} type="text" id="pet_skill" defaultValue={skill}/>
                    ))}
                </div>
                <button tabIndex={6} type="submit">Save Changes</button>
            </form>
            <div className="edit_toast inactive"> Saved Changes </div>
        </>
    )
}
