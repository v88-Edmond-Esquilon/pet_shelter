import React from "react";

import "./edit_pet.less";

export default function Edit_Pet() {
    return (
        <>
            <form id="edit_pet_form" action="/" method="POST" onSubmit={()=> {}}>
                <h2>Edit Details: Garfield</h2>
                <div className="form_group">
                    <label htmlFor="pet_name ">Pet Type</label>
                    <input autoFocus tabIndex={1} type="text" id="pet_name" name="pet_name" />
                    <span className="error_text">Sample Error</span>
                </div>
                <div className="form_group">
                    <label htmlFor="pet_description">Description</label>
                    <textarea tabIndex={2} name="pet_descrition" id="pet_description"></textarea>
                    <span className="error_text">Sample Error</span>
                </div>
                <div className="form_group">
                    <label htmlFor="pet_skill">Skills</label>
                    <input tabIndex={3} type="text" name="skill_1" id="pet_skill"/>
                    <input tabIndex={4} type="text" name="skill_2" id="pet_skill" />
                    <input tabIndex={5} type="text" name="skill_3" id="pet_skill"/>
                </div>
                <button tabIndex={6} type="submit">Save Changes</button>
            </form>
            <div className="edit_toast inactive"> Saved Changes </div>
        </>
    )
}
