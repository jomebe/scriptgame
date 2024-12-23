import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './component/main';
import Game from './component/game';
import Ending from './component/Ending';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="main" replace />} />
        <Route path="main" element={<Main />} />
        <Route path="game" element={<Game />} />
        <Route path="ending" element={<Ending />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
