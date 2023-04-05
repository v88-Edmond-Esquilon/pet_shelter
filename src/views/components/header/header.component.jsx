/** React */
import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
/** Plugin */
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
/** CSS */
import "./header.component.less";
import { showAddNewPetPage, showEditPetPage } from "../../../_reducers/page/page_slice";

export default function Header() {
    const clicked_add_pet  = useSelector(state => state.page.clicked_add_pet.status);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleAddPetButton = () => {
        navigate("/add_new_pet");
        dispatch(showAddNewPetPage(true));
    }

    useEffect(() => {
        if (location.pathname === '/' ) {
            dispatch(showAddNewPetPage(false));
            dispatch(showEditPetPage(false));
        }
    }, [location.pathname]);

    return (
        <div className="header_container">
            <Link to="/" onClick={() => dispatch(showAddNewPetPage(true))} className={`back_btn ${clicked_add_pet? "" : "inactive"}`}> <FaArrowLeft/>Back to Home</Link>
            <Link to="/" onClick={() => dispatch(showAddNewPetPage(false))} className="app_title">PETSHELTER</Link>
            <ul className={clicked_add_pet? "inactive" : ""}>
                <li className="active"><a href="#">Home</a></li>
                <li className=""><a href="#">Services</a></li>
                <li className=""><a href="#">Events</a></li>
            </ul>
            <button id="add_new_pet_btn" type="button" onClick={handleAddPetButton} disabled={clicked_add_pet}> <FaPlusCircle/> Add pet to Shelter </button>
        </div>
    )
}
