import React from "react";
import { Routes, Route } from "react-router";
import HomeHeader from "./Header/HomeHeader";
import GameHeader from "./Header/GameHeader";
import LeaderboardHeader from "./Header/LeaderboardHeader";

const Header = (props) => {
    const {currentLevel, setCurrentLevel, setLeaveGame} = props;

    return (
        <Routes>
            <Route exact path="/" element={<HomeHeader />} />
            <Route exact path="/leaderboard" element={<LeaderboardHeader />} />
            <Route exact path="/game" element={<GameHeader currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} setLeaveGame={setLeaveGame}/>} />
        </Routes>
    )
}

export default Header;