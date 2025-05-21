import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from "./componets/Cancel";
import Success from "./componets/Success";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cancel" element={<Cancel />}></Route>
                <Route path="/success" element={<Success />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;