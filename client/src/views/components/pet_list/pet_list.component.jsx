/** React */
import React                               from "react";
import { Link }                            from 'react-router-dom';
/** Modal */
import Pet_Details_Modal                   from "../../modal/pet_details.modal";
/** Redux */
import { useSelector, useDispatch }        from "react-redux";
import { pageState, modalState, petState } from "../../../_actions/user.action";
/** Socket */
import io from "socket.io-client";
/** CSS */
import "./pet_list.component.less";

const socket = io.connect("http://127.0.0.1:5174/");

export default function Pet_List() {
    const dispatch = useDispatch();
    const { modal: { show_modal }, pet: { pet_list }} = useSelector(state => state);

    const handleModal = (pet_id) => {
        dispatch(modalState.togglePetDetailsModal(!show_modal));
        dispatch(petState.selectedPet(pet_id));
    }

    const handleEdit = (pet_id) => {
        dispatch(pageState.showAddNewPetPage(true));
        dispatch(pageState.showEditPetPage(true));
        dispatch(petState.selectedPet(pet_id));
    }
    
    return (
        <>
            <table id="pet_list_container">
                <tbody>
                    {pet_list?.map((item) => (
                        <tr className="pet_item" key={item.id}>
                            <td className="pet_name">{item.pet_name}</td>
                            <td className="pet_type">{item.pet_type}</td>
                            <td><button id="pet_details_btn" onClick={() => handleModal(item.id)}>Details</button></td>
                            <td><Link to="/edit_pet" onClick={() => handleEdit(item.id)} id="edit_pet_btn">Edit</Link></td>
                        </tr>
                    ))}
                </tbody>    
            </table>  
            {show_modal &&
                 <Pet_Details_Modal/>
            }
        </>
    )
}

