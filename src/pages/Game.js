import React, { useState, useEffect } from "react";
import CharacterSelectMenu from "../components/CharacterSelectMenu";
import WinScreen from "../components/WinScreen";

const Game = (props) => {
    const { currentLevel, setCurrentLevel, leaveGame, setLeaveGame } = props;
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [clickCoordinates, setClickCoordinates] = useState();
    const [characterSelectMenu, setCharacterSelectMenu] = useState();
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [winScreen, setWinScreen] = useState();
    const [winStatus, setWinStatus] = useState(false);

    //Get clicked coordinates relative to image based on event taregt and set as new adjusted coordinates
    let getCoordinates = (e) => {
        let xClickCoordinate = e.pageX;
        let yClickCoordinate = e.pageY;
        return [xClickCoordinate, yClickCoordinate];
    }

    let setNewCoordinates = (e) => {
        let coordinates = getCoordinates(e);
        setClickCoordinates(coordinates);
    }

    //Check if click coordinates is given coordinates range
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

    //Check if every character in level have been found
    let checkWin = () => {
        let winStatus = currentLevel.characters.every((character) => character.foundStatus === true);
        return winStatus;
    }

    //Check if clicked coordinates match character coordinates and set found status to true if found
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

    let resetProps = () => {
        //Reset foundStatus Attr in each character
        let defaultCurrentLevel = currentLevel;
        defaultCurrentLevel.characters = defaultCurrentLevel.characters.map((character) => {
            character.foundStatus = false;
            return character;
        });

        setCurrentLevel(defaultCurrentLevel);
        setSelectedCharacter();
        setClickCoordinates();
        setCharacterSelectMenu();
        setTimer(0);
        setIsRunning(true);
        setWinScreen();
        setWinStatus(false);
        setLeaveGame(false);
    }
    //Append character select menu if images selected
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

    //Check if charcter has been clicked after character selected in menu
    useEffect(() => {
        setCharacterSelectMenu();
        if (selectedCharacter !== undefined) {
            let characterFound = checkCharacterClicked();

            if (characterFound === true) {
                if (checkWin()) setWinStatus(true);
            }
        };
    }, [selectedCharacter]);

    //Start background timer
    useEffect(() => {
        let intervalID;
        if (isRunning) {
            intervalID = setInterval(() => setTimer(timer + 1), 10);
        }

        return () => clearInterval(intervalID);

    }, [isRunning, timer])

    //Append winscreen and stop timer when win status is true
    useEffect(() => {
        if (winStatus === true) {
            setIsRunning(false);
            setWinScreen(<WinScreen timer={timer} setLeaveGame={setLeaveGame} currentLevel={currentLevel}/>);
        }
    }, [winStatus])

    //Reset all props when player leaves game
    useEffect(() => {
        if (leaveGame === true) {
            resetProps();
        }
    }, [leaveGame])

    return (
        <div>
            <img onClick={(e) => setNewCoordinates(e)} src={currentLevel.src} alt={currentLevel.name} />
            {characterSelectMenu};
            {winScreen};
        </div>
    )
}

export default Game;