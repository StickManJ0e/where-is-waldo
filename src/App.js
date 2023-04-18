import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import './css/App.css';

const App = () => {
  const [currentLevel, setCurrentLevel] = useState();
  const [leaveGame, setLeaveGame] = useState(false);

  return (
    <BrowserRouter>
      <Header currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} setLeaveGame={setLeaveGame}/>
      <Main currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} leaveGame={leaveGame} setLeaveGame={setLeaveGame}/>
    </BrowserRouter>
  )
}

export default App;
