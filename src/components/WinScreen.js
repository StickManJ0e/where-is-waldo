import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

const WinScreen = (props) => {
    const { timer, setLeaveGame, currentLevel } = props;
    const [uid, setUid] = useState();

    let getConvertedTime = () => {
        let seconds = (Math.floor((timer % 6000) / 100)).toString().padStart(2, "0");
        let milliseconds = (timer % 100).toString().padStart(2, "0");
        return `${seconds}:${milliseconds}`;
    }

    //Sign in anonymously and get user uid
    useEffect(() => {
        signInAnonymously(auth).catch((error) => {
            console.log(error);
        });
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {

            }
        });
    }, []);

    //Save player high score to scores database
    function saveScore(e) {
        return new Promise(function () {
            const scoreRef = doc(firestore, 'leaderboard', currentLevel.id, 'scores', uid);
            setDoc(scoreRef, {
                name: e.target.parentElement.parentElement.querySelector('input').value,
                uid: uid,
                score: getConvertedTime(),
                timestamp: serverTimestamp(),
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
                <h1>You finished in {getConvertedTime()} seconds!</h1>
                <div>Enter your name to save score to leaderboard.</div>
                <div className="username-input-div">
                    <label htmlFor='username'>Username</label>
                    <input type="text" name="username" id="username-input" placeholder="username"></input>
                </div>
                <div className="links">
                    <Link style={{ backgroundColor: '#3a86ff' }} to={'/'} onClick={() => setLeaveGame(true)}>Return</Link>
                    <Link to={'/'} onClick={(e) => saveAndReturn(e)}>Submit Score</Link>
                </div>
            </div>
        </div>
    )
}

export default WinScreen;