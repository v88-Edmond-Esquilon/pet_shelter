/** React */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
/** Component */
import Header       from "../../components/header/header.component";
import Hero_Section from "../../components/hero_section/hero_section.component";
import Pet_List     from "../../components/pet_list/pet_list.component";
/** Pages */
import Add_Pet      from "../add_pet/add_pet";
import Edit_Pet     from "../edit_pet/edit_pet";
/** Socket */
import io           from "socket.io-client";
/** CSS */
import "./App.less";


const socket = io.connect("http://127.0.0.1:5174/");

export default function App() {

    useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessageReceived(data.message);
        });
      }, [socket]);

    return (
        <div id="wrapper">
            <Router>
                < Header />
                <Routes>
                    <Route path="/" element={ 
                        <>
                            <Hero_Section />
                            <Pet_List />
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
