/** React */
import React from "react";
import { Link } from 'react-router-dom';
/** Modal */
import Pet_Details_Modal from "../../modal/pet_details.modal";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import "./pet_list.component.less";
import { showAddNewPetPage, showEditPetPage } from "../../../_reducers/page/page_slice";
import { toggleShowModal } from "../../../_reducers/modal/modal_slice";

export default function Pet_List() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.show_modal);
    const handleEdit = () => {
        dispatch(showAddNewPetPage(true));
        dispatch(showEditPetPage(true));
    }
    
    return (
        <>
            <table id="pet_list_container">
                <tbody>
                    <tr className="pet_item">
                        <td className="pet_name">Garfield</td>
                        <td className="pet_type">Cat</td>
                        <td><button id="pet_details_btn" onClick={() => dispatch(toggleShowModal(!isOpen))}>Details</button></td>
                        <td><Link to="/edit_pet" onClick={handleEdit} id="edit_pet_btn">Edit</Link></td>
                    </tr>
                </tbody>    
            </table>  
            {isOpen &&
                 <Pet_Details_Modal/>
            }
        </>
    )
}

