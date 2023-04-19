import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import {
    collection,
    orderBy,
    getDocs,
} from 'firebase/firestore';
import LevelData from "../data/LevelData";



const Leaderboard = () => {
    const [currentLevelID, setCurrentLevelID] = useState('level01');
    const [scores, setScores] = useState([]);

    async function getScores() {
        let scoreObject = (name, score, uid) => {
            return {
                name, score, uid
            }
        };

        const docRef = collection(firestore, 'leaderboard', currentLevelID, 'scores');
        const querySnapshot = await getDocs(docRef, orderBy('score', 'asc'));

        let newScores = []
        querySnapshot.forEach((doc) => {
            newScores = newScores.concat([scoreObject(doc.data().name, doc.data().score, doc.data().uid)]);
        })
        setScores([...new Set(newScores)]);
    }

    let setNewLevel = (levelId) => {
        let div = document.querySelector(`#${currentLevelID}`);
        div.style.backgroundColor = '';
        setCurrentLevelID(levelId);
    }

    useEffect(() => {
        getScores();
        let div = document.querySelector(`#${currentLevelID}`);
        div.style.backgroundColor = 'red';
    }, [currentLevelID])

    return (
        <div className="main-leaderboard">
            <h1>Leaderboard</h1>
            <div className="level-selector">
                {LevelData.map((level) => {
                    return (
                        <div id={level.id} key={level.id} className="level-card" onClick={() => setNewLevel(level.id)}>
                            <img src={level.src} alt={level.name} />
                            <div className="level-info">{level.name}</div>
                        </div>
                    )
                })}
            </div>
            <div className="scores-table">
                {scores.map((score) => {
                    return (
                        <div key={score.uid}>
                            {score.name}
                            {score.score}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Leaderboard