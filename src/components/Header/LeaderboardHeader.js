import React from "react";
import { Link } from "react-router-dom";

const LeaderboardHeader = () => {
    return (
        <header className="leaderboard-header">
        <h1><span style={{ color: '#3a86ff' }}>Where's </span><span style={{color: '#e63946'}}>Waldo?</span></h1>
        <Link to={'/'}>Return</Link>
    </header>
    )
}

export default LeaderboardHeader;