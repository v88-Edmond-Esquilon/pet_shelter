import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalState, petState } from "../../_actions/user.action";
import "./pet_details.modal.less";

export default function Pet_Details_Modal() {
    const dispatch = useDispatch();
    const { pet: { selected_pet}} = useSelector(state => state);

    const handleAdopt = () => {
        dispatch(petState.adoptPet(selected_pet.id));
        dispatch(modalState.togglePetDetailsModal(false));
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Details About: {selected_pet.pet_name}</h3>
                    <button onClick={() => dispatch(modalState.togglePetDetailsModal(false))}></button>
                </div>
                <div className="modal-body">
                    <p>Pet Type </p>
                    <span>{selected_pet.pet_type}</span>
                    <p>Description </p>
                    <span>{selected_pet.pet_description}</span>
                    <p>Skills </p>
                    <div>
                        {selected_pet.skills?.map((skill, index) => (
                            <span key={index}>
                                {skill}{index !== selected_pet.skills.length - 1 && <span className="dot">&#x2022;</span>}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="modal-footer">
                    <span>{selected_pet.like? "1" : "0"} Likes</span>
                    <button 
                        type="button" 
                        className={`btn ${ selected_pet.like? "liked" : "like" }`} 
                        disabled={selected_pet.like} 
                        onClick={() => dispatch(petState.likedPet({ id: selected_pet.id, key: "like", value: true}))}
                    > 
                        {`${ selected_pet.like? "Liked" : "Like" } ${selected_pet.pet_name}` }
                    </button>
                    <button 
                        type="button" 
                        className="btn adopt" 
                        onClick={() => handleAdopt()}
                    > 
                        Adopt {selected_pet.pet_name}
                    </button>
                </div>
            </div>
        </div>
    )
}
