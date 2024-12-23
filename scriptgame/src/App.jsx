import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './component/main';
import Game from './component/game';
import LevelComponent from './component/play/LevelComponent';
import Ending from './component/Ending';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/play/:levelId" element={<LevelComponent />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </Router>
  );
}

export default App;
