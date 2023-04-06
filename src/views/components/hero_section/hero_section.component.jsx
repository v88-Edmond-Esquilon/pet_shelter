import React from "react";

/** Image */
import Hero_Image_Home from "../../../assets/images/home_pet_image.svg";
import Hero_Image_Add  from  "../../../assets/images/add_pet.svg";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
/** CSS */
import "./hero_section.component.less";

export default function Hero_Section() {
    const { page: { clicked_add_pet, clicked_edit_pet }, pet: { pet_list }} = useSelector(state => state);

    return (
        <>
            <div className={`hero_container ${clicked_edit_pet? "inactive" : ""}`}>
                <div className="hero_description">
                    <h1>
                        {!clicked_add_pet
                            ?   <>Let's <span>Adopt</span> Don't <span>Shop</span></>
                            :   <>Know a pet that <span> </span> needs a home?</>
                        }
                    </h1>
                    <p>
                        {!clicked_add_pet
                            ?   <>Lorem ipsum dolor sit amet, consectetur <span></span> adipiscing elit. Neque id lorem nisi.</>
                            :   <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span></span>  Neque id lorem nisi.</>
                        }
                    </p>
                </div>
                <img src={clicked_add_pet? Hero_Image_Add : Hero_Image_Home} alt="cute picture of a puppy and a cat" />
            </div>
            <p className={`sub_header_title ${clicked_add_pet || !pet_list.length || clicked_edit_pet? "inactive" : ""}`}>These pets are looking for a good home</p>
        </>
    )
}
