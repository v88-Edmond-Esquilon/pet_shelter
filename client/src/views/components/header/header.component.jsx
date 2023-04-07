/** React */
import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
/** Plugin */
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { pageState } from "../../../_actions/user.action";
/** CSS */
import "./header.component.less";


export default function Header() {
    const { page: { clicked_add_pet }} = useSelector(state => state);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleAddPetButton = () => {
        navigate("/add_new_pet");
        dispatch(pageState.showAddNewPetPage(true));
        dispatch(pageState.showEditPetPage(false));
    }

    useEffect(() => {
        if (location.pathname === '/' ) {
            dispatch(pageState.showAddNewPetPage(false));
            dispatch(pageState.showEditPetPage(false));
        }
    }, [location.pathname]);

    return (
        <div className="header_container">
            <Link 
                to="/" 
                onClick={() => dispatch(pageState.showAddNewPetPage(true))} 
                className={`back_btn ${clicked_add_pet? "" : "inactive"}`}
            > 
                <FaArrowLeft/>Back to Home
            </Link>
            <Link 
                to="/"
                onClick={() => dispatch(pageState.showAddNewPetPage(false))} 
                className="app_title"
            >
                PETSHELTER
            </Link>
            <ul className={clicked_add_pet? "inactive" : ""}>
                <li className="active"><a href="#">Home</a></li>
                <li className=""><a href="#">Services</a></li>
                <li className=""><a href="#">Events</a></li>
            </ul>
            <button 
                id="add_new_pet_btn"
                type="button"
                onClick={handleAddPetButton}
            > 
                <FaPlusCircle/> Add pet to Shelter 
            </button>
        </div>
    )
}
