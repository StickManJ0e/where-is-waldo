import React, { useState, useEffect } from "react";
import CharacterSelectMenu from "../components/CharacterSelectMenu";
import WinScreen from "../components/WinScreen";

const Game = (props) => {
    const { currentLevel, setCurrentLevel } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [clickCoordinates, setClickCoordinates] = useState();
    const [characterSelectMenu, setCharacterSelectMenu] = useState();
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [winScreen, setWinScreen] = useState();
    const [winStatus, setWinStatus] = useState(false);

    //Get click coordinates relative to image based on event taregt and set as new clickCoordinates
    let getCoordinates = (e) => {
        let header = document.querySelector('header');
        let xClickCoordinate = e.pageX;
        let yClickCoordinate = e.pageY - header.offsetHeight;
        return [xClickCoordinate, yClickCoordinate];
    }

    let setNewCoordinates = (e) => {
        let coordinates = getCoordinates(e);
        setClickCoordinates(coordinates);
    }

    //Check if click coordinates is within charcter coordiantes range
    let checkInArrayRange = (xRange, yRange) => {
        if (
            clickCoordinates[0] >= xRange[0] &&
            clickCoordinates[0] <= xRange[1] &&
            clickCoordinates[1] >= yRange[0] &&
            clickCoordinates[1] <= yRange[1]
        ) {
            return true;
        }
        return false;
    }

    let checkWin = () => {
        let winStatus = currentLevel.characters.every((character) => character.foundStatus === true);
        return winStatus;
    }

    let checkCharacterClicked = () => {
        let charcterXRange = selectedCharacter.xCoordinates;
        let characterYRange = selectedCharacter.yCoordinates;
        let foundCharacter = checkInArrayRange(charcterXRange, characterYRange);

        if (foundCharacter === true) {
            let newCharacter = selectedCharacter;
            newCharacter.foundStatus = true;
            setSelectedCharacter(newCharacter);
            return true;
        }

        return false;
    }

    //If images clicked, append select menu
    useEffect(() => {
        if (clickCoordinates !== undefined) {
            setCharacterSelectMenu(
                <CharacterSelectMenu
                    currentLevel={currentLevel}
                    setSelectedCharacter={setSelectedCharacter}
                    clickCoordinates={clickCoordinates}
                />
            )
        }
    }, [clickCoordinates, currentLevel]);

    useEffect(() => {
        setCharacterSelectMenu();
        if (selectedCharacter !== undefined) {
            let characterFound = checkCharacterClicked();

            if (characterFound === true) {
                if (checkWin()) setWinStatus(true);
            }
        };
    }, [selectedCharacter]);

    //Background timer
    useEffect(() => {
        let intervalID;
        if (isRunning) {
            intervalID = setInterval(() => setTimer(timer + 1), 10);
        }

        return () => clearInterval(intervalID);

    }, [isRunning, timer])

    //On Win
    useEffect(() => {
        if (winStatus === true) {
            setIsRunning(false);
            setWinScreen(<WinScreen
                timer={timer}
                currentLevel={currentLevel} 
                setCurrentLevel={setCurrentLevel} 
                setSelectedCharacter={setSelectedCharacter} 
                setClickCoordinates={setClickCoordinates}
                setCharacterSelectMenu={setCharacterSelectMenu}
                setTimer={setTimer}
                setIsRunning={setIsRunning}
                setWinScreen={setWinScreen}
                setWinStatus={setWinStatus}
            />);
        }
    }, [winStatus])

    return (
        <div>
            <img onClick={(e) => setNewCoordinates(e)} src={currentLevel.src} alt={currentLevel.name} />
            {characterSelectMenu};
            {winScreen};
        </div>
    )
}

export default Game;