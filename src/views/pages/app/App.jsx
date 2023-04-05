/** React */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
/** Component */
import Header       from "../../components/header/header.component";
import Hero_Section from "../../components/hero_section/hero_section.component";
import Pet_List     from "../../components/pet_list/pet_list.component";
/** Pages */
import Add_Pet from "../add_pet/add_pet";
import Edit_Pet from "../edit_pet/edit_pet";
/** CSS */
import "./App.less";

export default function App() {


    return (
        <div id="wrapper">
            <Router>
                < Header />
                <Routes>
                    <Route path="/" element={ 
                        <>
                            <Hero_Section />
                            <Pet_List 
                  />
                        </>
                     }/>
                     <Route path="add_new_pet" element={
                        <>
                            <Hero_Section />
                            <Add_Pet/>
                        </>
                     }/>
                    <Route path="edit_pet" element={
                        <>
                            <Hero_Section />
                            <Edit_Pet/>
                        </>
                     }/>
                </Routes>
                <footer>
                    <p>	&#169;2023 <a href="/">V88Studios.</a> All Rights Reserved</p>
                </footer>
            </Router>
        </div>
    )
}
