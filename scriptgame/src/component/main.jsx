import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/main.css';

const Main = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <h1>Script Game</h1>
      <div className="btn-wrapper">
        <button 
          className="game-btn"
          onClick={() => navigate('/game')}
        >
          게임 시작
        </button>
      </div>
    </div>
  );
};

export default Main;
