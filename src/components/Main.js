import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Game from "../pages/Game";

const Main = () => {
    const [currentLevel, setCurrentLevel] = useState();

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home setCurrentLevel={setCurrentLevel} />} />
                <Route exact path="/game" element={<Game currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />} />
            </Routes>
        </div>
    )
}

export default Main;