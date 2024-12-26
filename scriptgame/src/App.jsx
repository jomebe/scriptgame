import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './component/main';
import Game from './component/game';
import Ending from './component/Ending';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </Router>
  );
}

export default App;
