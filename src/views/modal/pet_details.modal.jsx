import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowModal } from "../../_reducers/modal/modal_slice";
import "./pet_details.modal.less";

export default function Pet_Details_Modal() {
    const dispatch = useDispatch();


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Details About: Pet Name Here</h3>
                    <button onClick={() => dispatch(toggleShowModal(false))}></button>
                </div>
                <div className="modal-body">
                    <p>Pet Type </p>
                    <span>Cat</span>
                    <p>Description </p>
                    <span>Hates Mondays</span>
                    <p>Skills </p>
                    <span>Eating <span className="dot">&#x2022;</span> Sleeping <span className="dot">&#x2022;</span> Slacking off</span>
                </div>
                <div className="modal-footer">
                    <span>0 Likes</span>
                    <button type="button" className="btn like" onClick={() => dispatch(toggleShowModal(false))}> Like Garfield </button>
                    <button type="button" className="btn adopt" onClick={() => dispatch(toggleShowModal(false))}> Adopt Garfield </button>
                </div>
            </div>
        </div>
    )
}
