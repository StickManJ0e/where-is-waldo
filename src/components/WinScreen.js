import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';

const WinScreen = (props) => {
    const { timer, setLeaveGame, currentLevel } = props;
    const [uid, setUid] = useState();

    let getConvertedTime = () => {
        let seconds = (Math.floor((timer % 6000) / 100)).toString().padStart(2, "0");
        let milliseconds = (timer % 100).toString().padStart(2, "0");
        return `${seconds}:${milliseconds}`;
    }

    useEffect(() => {
        //Sign in annoymus user 
        signInAnonymously(auth)
            .catch((error) => {
                console.log(error);
            });

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            };
        });
    }, []);

    function saveScore(e) {
        return new Promise(function () {
            const scoreRef = doc(firestore, 'leaderboard', currentLevel.id, 'scores', uid);
            setDoc(scoreRef, {
                name: e.target.parentElement.querySelector('input').value,
                uid: uid,
                score: getConvertedTime(),
            });
        });
    }

    let saveAndReturn = (e) => {
        saveScore(e).then(
            setLeaveGame(true),
        )
    }

    return (
        <div>
            <div className="win-backdrop"></div>
            <div className="win-screen">
                <div>You finished in {getConvertedTime()} seconds!</div>
                <div className="username-input-div">
                    <p>Enter your name to save score to leaderboard.</p>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username-input" placeholder="username"></input>
                </div>
                <Link to={'/'} onClick={() => setLeaveGame(true)}>Return</Link>
                <Link to={'/'} onClick={(e) => saveAndReturn(e)}>Submit Score</Link>
            </div>
        </div>
    )
}

export default WinScreen;