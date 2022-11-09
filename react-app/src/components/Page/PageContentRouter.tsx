import {Route, Routes} from "react-router-dom";
import Main from "pages/Main/MainPage";

import React from "react";
import ShrinesPage  from "pages/Shrines/ShrinesPage";
import ContactPage  from "pages/Contact/ContactPage";
import ShrinePage   from "pages/Shrine/ShrinePage";


export default function () {
    return (
        <div className="page">
            <Routes>
                <Route path="/"         element={<Main/>}/>
                <Route path="/shrines"  element={<ShrinesPage/>}/>
                <Route path="/contact"  element={<ContactPage/>}/>

                <Route path="/shrine"  element={<ShrinePage/>}/>
            </Routes>
        </div>
    )
}