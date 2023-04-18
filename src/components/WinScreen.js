import React from "react";
import { Link } from "react-router-dom";

const WinScreen = (props) => {
    const { timer, setLeaveGame } = props;

    let getConvertedTime = () => {
        let seconds = (Math.floor((timer % 6000) / 100)).toString().padStart(2, "0");
        let milliseconds = (timer % 100).toString().padStart(2, "0");
        return `${seconds}:${milliseconds}`;
    }

    return (
        <div>
            <div className="win-backdrop"></div>
            <div className="win-screen">
                You finished in {getConvertedTime()} seconds!
                <Link to={'/'} onClick={() => setLeaveGame(true)}>Return</Link>
            </div>
        </div>
    )
}

export default WinScreen;