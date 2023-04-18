import React from "react";
import LevelData from "../data/LevelData";
import { useNavigate } from "react-router";

const Home = (props) => {
    const { setCurrentLevel } = props;
    let navigate = useNavigate();

    let selectLevelAndStartGame = (level) => {
        setCurrentLevel(level);
        return navigate('/game');
    }

    return (
        <div className="main-home">
            {LevelData.map((level) => {
                return (
                    <div id={level.id} key={level.id} className="level-card" onClick={() => selectLevelAndStartGame(level)}>
                        <img src={level.src} alt={level.name} />
                        <div className="level-info">
                            <div>{level.name}</div>
                            <div className="character-display">
                                {(level.characters).map((character) => {
                                    return (
                                        <img src={character.src} alt={character.name} key={character.id} className="character-profile"/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;