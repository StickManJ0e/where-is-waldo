import React from "react";
import { Link } from "react-router-dom";

const LeaderboardHeader = () => {
    return (
        <header>
        <h1>Where's Waldo?</h1>
        <Link to={'/'}>Return</Link>
    </header>
    )
}

export default LeaderboardHeader;