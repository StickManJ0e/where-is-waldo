import React from "react";
import { Link } from "react-router-dom";

const GameHeader = (props) => {
    const { currentLevel, setCurrentLevel, setLeaveGame } = props;

    return (
        <header className="game-header">
            <div className="character-display">
                {(currentLevel.characters).map((character) => {
                    return (
                        <img src={character.src} alt={character.name} key={character.id} className="character-profile" />
                    )
                })}
            </div>
            <Link to={'/'} onClick={() => {
                setCurrentLevel()
                setLeaveGame(true)
            }}>Return</Link>
        </header>
    )
}

export default GameHeader;