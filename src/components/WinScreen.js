import React from "react";
import { Link } from "react-router-dom";

const WinScreen = (props) => {
    const {
        timer,
        currentLevel,
        setCurrentLevel,
        setSelectedCharacter,
        setClickCoordinates,
        setCharacterSelectMenu,
        setTimer,
        setIsRunning,
        setWinScreen,
        setWinStatus,
    } = props;

    let resetProps = () => {
        //Reset foundStatus Attr in each character
        let defaultCurrentLevel = currentLevel;
        defaultCurrentLevel.characters = defaultCurrentLevel.characters.map((character) => {
            character.foundStatus = false;
            return character;
        })

        setSelectedCharacter();
        setClickCoordinates();
        setCharacterSelectMenu();
        setTimer();
        setIsRunning(true);
        setWinScreen();
        setWinStatus(false);
    }

    return (
        <div>
            <div className="win-backdrop"></div>
            <div className="win-screen">
                You finished in {timer}!
                <Link to={'/'} onClick={() => resetProps()}>Return</Link>
            </div>
        </div>
    )
}

export default WinScreen;