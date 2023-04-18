import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <header>
            <h1>Where's Waldo?</h1>
            <Link to={'/leaderboard'}>Leaderboard</Link>
        </header>
    )
}

export default HomeHeader;