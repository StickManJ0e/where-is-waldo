import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Game from "../pages/Game";
import Leaderboard from "../pages/Leaderboard";

const Main = (props) => {
    const { currentLevel, setCurrentLevel, leaveGame, setLeaveGame } = props;

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home setCurrentLevel={setCurrentLevel} />} />
                <Route exact path="/game" element={<Game currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} leaveGame={leaveGame} setLeaveGame={setLeaveGame} />} />
                <Route exact path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </div>
    )
}

export default Main;